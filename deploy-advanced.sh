#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Advanced Deployment Script${NC}"
echo "================================"

# Check if .env file exists
if [ ! -f "deploy.env" ]; then
    echo -e "${YELLOW}⚠️  deploy.env file not found!${NC}"
    echo "Please copy deploy.env.example to deploy.env and add your credentials:"
    echo "cp deploy.env.example deploy.env"
    echo "Then edit deploy.env with your GoDaddy FTP details"
    exit 1
fi

# Load environment variables
source deploy.env

# Validate required variables
if [ -z "$FTP_SERVER" ] || [ -z "$FTP_USERNAME" ] || [ -z "$FTP_PASSWORD" ]; then
    echo -e "${RED}❌ Missing FTP credentials in deploy.env${NC}"
    echo "Please check your deploy.env file has:"
    echo "- FTP_SERVER"
    echo "- FTP_USERNAME" 
    echo "- FTP_PASSWORD"
    exit 1
fi

# Set default FTP directory if not specified
if [ -z "$FTP_DIRECTORY" ]; then
    FTP_DIRECTORY="public_html"
    echo -e "${YELLOW}⚠️  FTP_DIRECTORY not set, using default: $FTP_DIRECTORY${NC}"
fi

echo -e "${BLUE}📂 Using FTP directory: $FTP_DIRECTORY${NC}"

# Build the project
echo -e "${BLUE}📦 Building project...${NC}"
npm run build

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Build failed!${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Build successful!${NC}"

# Choose deployment method
echo ""
echo -e "${BLUE}Choose deployment method:${NC}"
echo "1) FTP Upload (automatic)"
echo "2) Manual Upload (instructions)"
echo "3) Test build locally"
echo "4) Exit"

read -p "Enter choice (1-4): " choice

case $choice in
    1)
        echo -e "${BLUE}📤 Uploading via FTP...${NC}"
        
        # Check if lftp is available
        if command -v lftp &> /dev/null; then
            # Create FTP script with certificate verification disabled for GoDaddy
            cat > ftp_upload.txt << EOF
set ssl:verify-certificate no
set ftp:ssl-allow no
set net:timeout 30
set net:max-retries 3
open $FTP_SERVER
user $FTP_USERNAME $FTP_PASSWORD
# Try to change to the target directory
cd $FTP_DIRECTORY
cd synergypartners.ai
# List current directory to verify we're in the right place
ls
# Mirror the dist folder contents
mirror --reverse --delete --verbose dist/ .
bye
EOF
            
            echo -e "${BLUE}📤 Executing FTP script...${NC}"
            lftp -f ftp_upload.txt
            
            if [ $? -eq 0 ]; then
                echo -e "${GREEN}✅ FTP upload complete!${NC}"
            else
                echo -e "${YELLOW}⚠️  FTP upload completed with warnings${NC}"
                echo "Check the output above for any errors"
            fi
            
            rm ftp_upload.txt
        else
            echo -e "${RED}❌ lftp not found!${NC}"
            echo "Please install lftp: brew install lftp"
        fi
        ;;
        
    2)
        echo -e "${YELLOW}📋 Manual Upload Instructions:${NC}"
        echo ""
        echo "1. Open your GoDaddy file manager"
        echo "2. Navigate to $FTP_DIRECTORY/synergypartners.ai/"
        echo "3. Upload these files from the 'dist' folder:"
        echo "   - index.html"
        echo "   - All files in assets/ folder"
        echo "   - submit-lead.php"
        echo "   - favicon.ico"
        echo "   - _redirects"
        echo ""
        echo "⚠️  Make sure to upload the CONTENTS of dist/, not the dist folder itself!"
        ;;
        
    3)
        echo -e "${BLUE}🌐 Starting local preview...${NC}"
        echo "Opening http://localhost:4173"
        npm run preview
        ;;
        
    4)
        echo -e "${YELLOW}👋 Exiting...${NC}"
        exit 0
        ;;
        
    *)
        echo -e "${RED}❌ Invalid choice${NC}"
        exit 1
        ;;
esac

echo ""
echo -e "${GREEN}🎉 Deployment process complete!${NC}"
