# SynergyPartners.AI Website

A modern React-based website for SynergyPartners.AI, an AI governance and transformation platform. Built with React 19, Vite, Tailwind CSS, and shadcn/ui components.

## 🚀 Features

- **Modern React 19** with latest features and hooks
- **Responsive Design** with Tailwind CSS v4
- **Component Library** using shadcn/ui and Radix UI
- **Routing** with React Router v7
- **Form Handling** with React Hook Form and Zod validation
- **Email Integration** with mailto and webhook support
- **Netlify Functions** for serverless backend
- **Dark Mode Support** with CSS variables
- **Accessibility** with ARIA labels and semantic HTML

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/            # shadcn/ui components
│   ├── EmailCaptureMailto.jsx
│   └── ModulePage.jsx
├── pages/              # Page components
│   ├── ActionIQ.jsx
│   ├── InsightIQ.jsx
│   ├── PlanIQ.jsx
│   └── TrustIQ.jsx
├── constants/          # Application constants
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── assets/             # Images and static assets
```

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite, Tailwind CSS
- **UI Components**: shadcn/ui, Radix UI
- **Icons**: Lucide React
- **Forms**: React Hook Form, Zod
- **Routing**: React Router DOM
- **Deployment**: Netlify
- **Package Manager**: pnpm

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd website
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp src/env.example .env.local
   ```
   
   Edit `.env.local` with your actual values:
   ```env
   VITE_ZAPIER_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/your-webhook-id/
   VITE_CONTACT_EMAIL=your-email@domain.com
   VITE_APP_NAME=Your App Name
   ```

4. **Start development server**
   ```bash
   pnpm dev
   ```

## 🚀 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint

## 🌐 Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `VITE_ZAPIER_WEBHOOK_URL` | Zapier webhook for lead capture | Yes | - |
| `VITE_CONTACT_EMAIL` | Contact email address | Yes | tholmes@synergypartners.ai |
| `VITE_APP_NAME` | Application name | No | SynergyPartners.AI |
| `VITE_APP_URL` | Application URL | No | https://synergypartners.ai |

## 🎨 Customization

### Colors and Themes
The design system uses CSS variables defined in `src/App.css`. You can customize:
- Primary colors
- Secondary colors
- Background colors
- Border colors
- Dark mode variants

### Components
All UI components are built with shadcn/ui and can be customized using:
- Tailwind CSS classes
- CSS variables
- Component variants

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and descriptions
- Keyboard navigation support
- Screen reader compatibility
- High contrast support

## 🧪 Testing

To add tests to the project:

1. **Install testing dependencies**
   ```bash
   pnpm add -D @testing-library/react @testing-library/jest-dom vitest
   ```

2. **Create test files** in `src/components/__tests__/`

3. **Run tests**
   ```bash
   pnpm test
   ```

## 🚀 Deployment

### Netlify (Recommended)

1. **Connect your repository** to Netlify
2. **Set build settings**:
   - Build command: `pnpm build`
   - Publish directory: `dist`
3. **Set environment variables** in Netlify dashboard
4. **Deploy automatically** on git push

### Manual Deployment

1. **Build the project**
   ```bash
   pnpm build
   ```

2. **Upload** the `dist` folder to your hosting provider

## 🔧 Development Guidelines

### Code Style
- Use functional components with hooks
- Follow React best practices
- Use meaningful variable names
- Add PropTypes for component validation
- Keep components focused and single-purpose

### File Naming
- Use PascalCase for components: `ModulePage.jsx`
- Use camelCase for utilities: `use-mobile.js`
- Use kebab-case for CSS: `App.css`

### Import Order
1. React and external libraries
2. Internal components
3. Utilities and constants
4. Assets and styles

## 🐛 Troubleshooting

### Common Issues

1. **Build errors**: Check environment variables are set
2. **Styling issues**: Verify Tailwind CSS is properly configured
3. **Routing problems**: Ensure all routes are defined in `main.jsx`

### Getting Help

- Check the [React documentation](https://react.dev/)
- Review [Tailwind CSS docs](https://tailwindcss.com/)
- Consult [shadcn/ui documentation](https://ui.shadcn.com/)

## 📄 License

This project is proprietary to SynergyPartners.AI. All rights reserved.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For support and questions:
- Email: tholmes@synergypartners.ai
- Website: https://synergypartners.ai
