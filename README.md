<p align="center">
    <img src="https://raw.githubusercontent.com/DotVTech/the-stars/master/images/read-me/home-page.png" alt="The Stars" />
</p>    

<h3 align="center">The Stars</h3>

<p align="center">
    <a href="https://vietdang.me/the-stars">The Stars</a> is a static website built with HTML, CSS, Sass, and JavaScript.
</p>

## :open_file_folder: What's included

    .
    |–– index.html   
    |
    |
    |–– src
    |   |–– css
    |       |–– sass        # Custom styles
    |       |–– vendor      # Third-party CSS libraries
    |
    |   |–– js
    |
    |    
    |–– images              
    |
    |
    |–– dist                # Minified CSS, JavaScript, and image files

## :hammer: Getting Started

Be sure to have [Node.js](https://nodejs.org/) installed before proceeding.

1. Clone the repo

    ```bash
    git clone https://github.com/DotVTech/the-stars
    cd the-stars
    ```

2. Install dependencies

    ```bash
    npm ci
    ```

3. Run gulp task

    #### Watch Sass files

    ```bash
    node_modules/.bin/gulp watch-sass
    ```

    Run this command before updating any Sass file.
    This command watches all Sass files for changes. Whenever a change is made to a Sass file, the Sass file is automatically compiled into CSS.

    #### Watch JavaScript files

    ```bash
    node_modules/.bin/gulp watch-js
    ```

    Run this command before updating any JavaScript file.
    This command watches all JavaScript files for changes. Whenever a change is made to a JavaScript file, the JavaScript file is automatically compiled into JavaScript.

    #### Minify images

    ```bash
    node_modules/.bin/gulp images
    ```

## :b: BEM

### HTML Classes

- Class names follow the [BEM naming convention](https://en.bem.info/methodology/quick-start/)

    ```html
    <!-- Block -->
    <section class="block"></section>

    <!-- Element -->
    <section class="block">
        <div class="block__element"></div>
    </section>        

    <!-- Modifer -->
    <section class="block block--modifer">
        <div class="block__element block__element--modifer"></div>
    </section>            
    ```    

- All HTML elements within any given \<section> block has an "element class"    

### HTML IDs are only used for:    
- JS Hooks

    ```javascript
    document.querySelector('#foo')
    ```

- Anchor Hrefs

    ```html
    <a href="#bar">
    ```

### Sass

- Margins dependent on a given \<section> block are added on its section's "element classes"

    ```html
    <section class="block">
        <div class="block__element"></div>
        <div class="block__element2"></div>
    </section>

    <style>
        .block__element {
            margin-bottom: 1rem;
        }

        .block__element2 {
            margin-bottom: 5rem;
        }
    </style>
    ```

## :pray: Thanks

Web design by [pixelgrade](https://themeforest.net/item/rosa-an-exquisite-restaurant-wordpress-theme/7920093)
