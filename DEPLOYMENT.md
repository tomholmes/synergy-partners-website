# 🚀 Deployment Automation Guide

## **Option 1: Local Development + Preview (Fastest)**

### **Start Development Server:**
```bash
npm run dev
```
- Opens at `http://localhost:5173`
- **Live reload** - changes appear instantly
- **No upload needed** for testing

### **Preview Production Build:**
```bash
npm run build
npm run preview
```
- Opens at `http://localhost:4173`
- Shows exactly what will be uploaded
- **Test before uploading**

---

## **Option 2: Automated Script Deployment**

### **Setup:**
1. Copy `deploy.env.example` to `deploy.env`
2. Add your GoDaddy FTP credentials:
   ```bash
   FTP_SERVER=your-ftp-server.com
   FTP_USERNAME=your-username
   FTP_PASSWORD=your-password
   ```
3. Install lftp: `brew install lftp` ✅ **Already installed!**

### **Deploy:**
```bash
# Simple deployment
source deploy.env
./deploy.sh

# Advanced deployment (recommended)
./deploy-advanced.sh
```

---

## **Option 3: GitHub Actions (Professional)**

### **Setup:**
1. Push code to GitHub
2. Add secrets in GitHub repository:
   - `FTP_SERVER`
   - `FTP_USERNAME`
   - `FTP_PASSWORD`
3. **Every push automatically deploys!**

### **Manual Deploy:**
- Go to GitHub Actions tab
- Click "Run workflow" on "Deploy to GoDaddy"

---

## **Recommended Workflow:**

1. **Develop locally** with `npm run dev` (instant preview)
2. **Test production build** with `npm run preview`
3. **Deploy** with `./deploy-advanced.sh` or push to GitHub

## **Benefits:**
- ✅ **No more edit-upload-test cycles**
- ✅ **Instant local preview**
- ✅ **Automated deployment**
- ✅ **Professional CI/CD pipeline**

## **Troubleshooting:**

### **If lftp upload fails:**
- Use `./deploy-advanced.sh` and choose option 2 for manual upload
- Check your FTP credentials in `deploy.env`
- Verify your GoDaddy server allows FTP connections

### **If build fails:**
- Check for syntax errors in your code
- Run `npm install` to ensure dependencies are up to date
- Check the console output for specific error messages
