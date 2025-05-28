# Blog System

This folder contains your blog posts. Each blog post is a separate HTML file with LaTeX math support via MathJax.

## Adding a New Blog Post

1. **Copy the template**: Make a copy of `template.html` and rename it (e.g., `my-new-post.html`)

2. **Edit the content**: 
   - Replace `[BLOG POST TITLE]` with your actual title (appears in two places)
   - Replace `[DATE]` with the publication date
   - Replace `[READING TIME]` with estimated reading time
   - Write your content in the designated area

3. **Update the main blog page**: 
   - Open `../index.html`
   - Find the Blog tab section
   - Add a new blog post entry with:
     - Title
     - Publication date
     - Brief excerpt/summary
     - Link to your new HTML file

## LaTeX Math Support

You can use LaTeX syntax for mathematical expressions:

### Inline Math
Use single dollar signs: `$E = mc^2$` renders as $E = mc^2$

### Display Math
Use double dollar signs for centered equations:
```
$$\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}$$
```

### Common LaTeX Commands
- Greek letters: `$\alpha, \beta, \gamma, \theta, \lambda$`
- Fractions: `$\frac{a}{b}$`
- Subscripts/Superscripts: `$x_i^2$`
- Summations: `$\sum_{i=1}^{n} x_i$`
- Integrals: `$\int_a^b f(x) dx$`
- Matrices: `$\begin{pmatrix} a & b \\ c & d \end{pmatrix}$`

## HTML Formatting

You can use standard HTML elements:
- `<h2>` and `<h3>` for section headings
- `<strong>` for bold text
- `<em>` for italic text
- `<code>` for inline code
- `<pre>` for code blocks
- `<blockquote>` for quotes
- `<ul>` and `<ol>` for lists

## File Structure

```
blog/
├── README.md           # This file
├── template.html       # Template for new posts
├── sample-post.html    # Example blog post
└── [your-posts].html   # Your future blog posts
```

## Tips

1. **Keep filenames simple**: Use lowercase letters, numbers, and hyphens only
2. **Test locally**: Open your HTML file in a browser to check formatting
3. **Math rendering**: MathJax may take a moment to load and render equations
4. **Mobile friendly**: The template is responsive and works on all devices
5. **SEO friendly**: Update the `<title>` tag for better search visibility

## Example Blog Post Entry

When you create a new post, add this to the main blog section in `../index.html`:

```html
<div class="blog-post">
    <h3>Your Blog Post Title</h3>
    <p class="blog-meta">Published on Month Day, Year</p>
    <p>A brief excerpt or summary of your blog post content...</p>
    <a href="blog/your-post-filename.html" class="read-more">Read More →</a>
</div>
``` 