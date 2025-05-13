# Personal Portfolio Website

A personal portfolio website designed to showcase work and blog posts. The site is compatible with GitHub Pages deployment.

## Features

- Responsive design that works on mobile, tablet, and desktop
- Dark theme modern UI
- Featured posts section with like functionality
- Simple and clean navigation

## Setup and Deployment

### Local Development

1. Clone this repository to your local machine
2. Open the `index.html` file in your browser to view the site
3. Make any desired changes to the HTML, CSS, or JavaScript files

### GitHub Pages Deployment

This site is designed to be easily deployed to GitHub Pages:

1. Push this repository to GitHub
2. Go to your repository settings
3. Scroll down to the GitHub Pages section
4. Select the branch you want to deploy (usually 'main' or 'master')
5. Click Save

Your site will be available at `https://[your-username].github.io/[repository-name]/`

## Image Placeholders

The site currently uses placeholder colors for images. To add your own images:

1. Add your images to a folder named `images`
2. Update the CSS in `css/style.css` to reference your image files instead of using background colors

For example, change:

```css
.post-image {
  height: 180px;
  background-color: #374151; /* Placeholder for post images */
}
```

To:

```css
.post-image {
  height: 180px;
  background-image: url("../images/your-image.jpg");
  background-size: cover;
  background-position: center;
}
```

## Customization

- Change the color scheme by modifying the CSS variables in the `:root` selector in `css/style.css`
- Update your personal information in the `index.html` file
- Add or remove sections as needed

## License

This project is open source and available under the [MIT License](LICENSE).
