# Personal Website

A simple, clean personal website with tabbed navigation for showcasing your work, projects, blog, and contact information.

## Features

- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Tab Navigation**: Easy navigation between Home, Work, Projects, Blog, and Contact sections
- **Modern UI**: Clean, professional design inspired by modern web standards
- **Easy to Customize**: Simple HTML structure that's easy to edit
- **Interactive Elements**: Hover effects and smooth transitions
- **Contact Form**: Basic contact form with validation (requires backend for functionality)

## Getting Started

1. Open `index.html` in your web browser to view the website
2. Edit the content in `index.html` to add your personal information
3. Customize the styling in `styles.css` if needed
4. The JavaScript in `script.js` handles tab functionality and interactions

## Customization Guide

### Personal Information

Edit the following sections in `index.html`:

#### Header
```html
<h1>Your Name</h1>
<p class="subtitle">Your Title/Description</p>
```

#### Home Tab
- Update the welcome message and introduction
- Modify the quick links and contact information
- Add your actual social media links

#### Work Tab
- Replace the work experience entries with your actual experience
- Update company names, dates, and descriptions
- Modify the skills tags to reflect your actual skills

#### Projects Tab
- Replace project examples with your actual projects
- Add links to live demos and GitHub repositories
- Include relevant technologies and descriptions

#### Blog Tab
- Add your actual blog posts or remove this section if not needed
- Update dates and descriptions
- Link to your actual blog posts

#### Contact Tab
- Update your actual contact information
- Replace social media links with your profiles
- Customize the contact form or add backend functionality

### Styling

The website uses a clean, modern design with:
- **Primary Color**: Blue (#007bff)
- **Secondary Colors**: Green for projects, Yellow for blog
- **Typography**: System fonts for optimal performance
- **Layout**: Centered container with max-width of 900px

To customize colors, edit the CSS variables in `styles.css`:
- Work items: Blue border (`#007bff`)
- Project items: Green border (`#28a745`)
- Blog items: Yellow border (`#ffc107`)

### Adding New Sections

To add a new tab:

1. Add a new button in the navigation:
```html
<button class="tab-btn" data-tab="newsection">New Section</button>
```

2. Add the corresponding content:
```html
<div class="tab-content" id="newsection">
    <h2>New Section</h2>
    <p>Your content here...</p>
</div>
```

3. The JavaScript will automatically handle the tab functionality.

## File Structure

```
personal-website/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Browser Support

This website works in all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## Making it Live

To put your website online:

1. **GitHub Pages**: Upload to a GitHub repository and enable GitHub Pages
2. **Netlify**: Drag and drop the folder to Netlify for instant deployment
3. **Vercel**: Connect your GitHub repository to Vercel
4. **Traditional Hosting**: Upload files to any web hosting service

## Contact Form Backend

The contact form currently shows a demo message. To make it functional, you'll need to:

1. Set up a backend service (Node.js, PHP, Python, etc.)
2. Create an endpoint to handle form submissions
3. Update the form action and method in the HTML
4. Consider using services like Formspree, Netlify Forms, or EmailJS for easier setup

## Customization Tips

- **Images**: Add a profile photo by including an `<img>` tag in the header
- **Icons**: Consider adding Font Awesome or other icon libraries for social links
- **Analytics**: Add Google Analytics or other tracking if needed
- **SEO**: Update the `<title>` and add meta descriptions for better search visibility
- **Favicon**: Add a favicon.ico file for a professional touch

## License

This template is free to use and modify for personal or commercial projects.

---

**Need help?** The code is well-commented and structured to be beginner-friendly. Each section is clearly marked and easy to modify. 