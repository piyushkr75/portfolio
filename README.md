# 🚀 Piyush Kumar - Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS. Showcasing my projects, skills, and experience as a web developer.

## ✨ Features

- 🎨 **Modern UI/UX** - Beautiful and responsive design that works on all devices
- 🌙 **Dark Mode Support** - Toggle between light and dark themes
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and builds
- 🎭 **Smooth Animations** - Engaging animations and transitions throughout
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- 📧 **Contact Form** - Integrated EmailJS for contact form functionality
- 🌟 **Interactive Elements** - Hover effects, animated backgrounds, and smooth scrolling

## 🛠️ Tech Stack

- **Frontend Framework:** React 18.3.1
- **Build Tool:** Vite 5.3.4
- **Styling:** Tailwind CSS 4.1.4
- **Icons:** Lucide React
- **UI Components:** Radix UI
- **Email Service:** EmailJS
- **Routing:** React Router DOM 7.5.1

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/piyushkr75/piyush-portfolio.git
cd piyush-portfolio/portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🚀 Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── projects/          # Project images
│   ├── Piyush_Kumar_Resume.pdf
│   └── piyushhh.jpg       # Profile image
├── src/
│   ├── components/
│   │   ├── AboutSection.jsx
│   │   ├── ContactSection.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── SkillsSection.jsx
│   │   ├── StarBackground.jsx
│   │   ├── ThemeToggle.jsx
│   │   └── ui/            # UI components
│   ├── hooks/
│   │   └── use-toast.js
│   ├── lib/
│   │   └── utils.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── NotFound.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── vite.config.js
```

## 🎯 Sections

- **Hero Section** - Introduction with animated name and call-to-action
- **About Section** - Personal information and profile image
- **Skills Section** - Technical skills and expertise
- **Projects Section** - Showcase of featured projects
- **Contact Section** - Contact form and social media links
- **Footer** - Links and copyright information

## 🔧 Configuration

### EmailJS Setup

1. Create a `.env` file in the root directory (`portfolio/.env`):

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

2. Replace the placeholder values with your actual EmailJS credentials from [EmailJS Dashboard](https://dashboard.emailjs.com/).

3. Copy `.env.example` to `.env` if you need a template:

```bash
cp .env.example .env
```

**Note:** The `.env` file is already in `.gitignore` to keep your credentials secure. Never commit your `.env` file to version control.

### Social Media Links

Update social media links in:

- `src/components/ContactSection.jsx` - Contact section
- `src/components/Footer.jsx` - Footer section

## 🎨 Customization

### Colors

Colors can be customized in `src/index.css` under the `:root` and `.dark` sections.

### Content

Update the following files to customize content:

- `src/components/HeroSection.jsx` - Hero section content
- `src/components/AboutSection.jsx` - About section content
- `src/components/ProjectsSection.jsx` - Projects list
- `src/components/SkillsSection.jsx` - Skills list

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 👨‍💻 About Me

I'm a dedicated and motivated Information Science and Engineering student at Siddaganga Institute of Technology (Class of 2027). I'm passionate about web development and have strong skills in the MERN Stack (MongoDB, Express.js, React, Node.js).

## 📞 Contact

- **Email:** piyushkr865@gmail.com
- **Phone:** +919507972976
- **Location:** Tumakuru, Karnataka, India
- **LinkedIn:** [Piyush Kumar](https://www.linkedin.com/in/piyush-kumar-41883a303/)
- **Instagram:** [@iam_piyushh12](https://www.instagram.com/iam_piyushh12/?hl=en)
- **GitHub:** [piyushkr75](https://github.com/piyushkr75)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [React](https://react.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide React](https://lucide.dev/)
- Email service by [EmailJS](https://www.emailjs.com/)

---

Made with ❤️ by Piyush Kumar
