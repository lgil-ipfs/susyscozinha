# Cozinha da Susy

A bilingual (Portuguese/English) website preserving traditional Algarve family recipes.

## Structure
- `index.html`: Home page
- `about.html`: About Grandma Susy
- `recipes.html`: List of all recipes
- `recipes/`: Folder containing individual recipe HTML files
- `css/styles.css`: Main stylesheet
- `js/script.js`: Search, language toggle, and interactivity logic
- `images/`: All project images

## How to Add a New Recipe

1. **Create the HTML File**:
   - Duplicate an existing recipe file (e.g., `recipes/caldo-verde.html`).
   - Rename it (e.g., `recipes/arroz-de-pato.html`).
   - Update the content:
     - Title (`<h1>` and `<title>`)
     - Metadata (prep time, cook time)
     - Ingredients list (keep the `<span class="lang-pt">` structure for bilingual support)
     - Instructions steps
     - Image path (`../images/your-image.jpg`)

2. **Add to Recipes List**:
   - Open `recipes.html`.
   - Copy an `<article class="recipe-card">` block.
   - Update the image, title, description, and link (`href="recipes/arroz-de-pato.html"`).
   - Update `data-tags` and `data-category` for search filtering.

3. **Add Image**:
   - Place the image in the `images/` folder.
   - Use high-quality JPG or PNG.

## Language Support
Everything text-based uses the following structure:
```html
<span class="lang-pt">Texto em Português</span>
<span class="lang-en">English Text</span>
```
The JavaScript automatically hides/shows the correct language based on the user's preference (saved in browser).

## Development
- Open `index.html` in your browser to view the site.
- No build step required (Vanilla HTML/CSS/JS).
