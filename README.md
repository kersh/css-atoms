CSS Atoms
=========

*A legal way of doing inline css*

A low-level, configurable CSS toolkit.

---

## Browser support

Default support is last 2 versions of each browser. However, you can compile atoms yourself and extend browser support.

## Preprocessor support

* Sass
* Less
* Stylus

## What is this?

A simple set of configurable via *atoms config* css classes that repeats most of the css properties.


## Why?

CSS Atoms can be useful when you need to apply a simple css rule on a single element without inline css and without creating dedicated css file.

Using atoms are good because:

* **DRY Rule.** When you reuse CSS class created once you don't create duplicated code.
* **Quicker to style/prototype.** Instead of creating separate anchor class/id for an element and style it you can simply apply class on your element without going into styles at all.
* **No more inline styles.** Instead of doing inline CSS you can apply class.
* **Easy to override and change.** Atoms have flat structure which allows easily overwrite them.


## How to install?
You have 2 options:

1. Use compiled version in HTML.

**In your index.html** 
```html
<link rel="stylesheet" href="../node_modules/css-atoms/dist/css-atoms.css">
```

2. Compile yourself (recommended). This option allow you to configure and extend atoms.

**Sass (in your styles.scss)**
```scss
// use original
@import '<path-to-node_modules-folder>/css-atoms/src/sass/atoms.config.scss';

// or create your config
@import '<path-to-your-config-file>/atoms.config.scss';

@import '<path-to-node_modules-folder>/css-atoms/src/sass/atoms.scss';
```

**Less (in your styles.less)**
```less
// use original
@import '<path-to-node_modules-folder>/css-atoms/src/less/atoms-config.scss';

// or create your config
@import '<path-to-your-config-file>/atoms-config.scss';

@import '<path-to-node_modules-folder>/css-atoms/src/less/atoms.scss';
```

**Stylus (in your styles.styl)**
```stylus
// use original
@import '<path-to-node_modules-folder>/css-atoms/src/stylus/atoms.config.styl';

// or create your config
@import '<path-to-your-config-file>/atoms.config.styl';

@import '<path-to-node_modules-folder>/css-atoms/src/stylus/atoms.styl';
```

## How to use?

### Without CSS Atoms:
```html
<div class="some-class">
    <h1>User Name</h1>
    <img src="avatar.png" alt="avatar">
</div>

<div class="another-class">
    <h3>Simple layout</h3>
    <p>Hello world!</p>
</div>

<div class="more-class">
    <button>Click</button>
</div>

<style>
    .some-class {
        display: flex;
    }
    
    .another-class {
        display: flex;
    }
    
    .more-class {
        position: relative;
        
        button {
            position: absolute;
            font-weight: 700;
        }
    }
</style>
```

### With CSS Atoms:
```html
<div class="flex">
    <h1>User Name</h1>
    <img src="avatar.png" alt="avatar">
</div>

<div class="flex">
    <h3>Simple layout</h3>
    <p>Hello world!</p>
</div>

<div class="relative">
    <button class="absolute font-weight--bold">Click</button>
</div>
```


## How to contribute

1. Install all dependencies

    `npm install`

2. To run in dev mode

    `npm start`

3. To update dist file

    `npm run build`


### Other recommendation

- If you have something preprocessor specific, then use one of the preprocessors branches (sass/less/stylus).
- For each new atom create new branch.
- Please, try to add new atoms for each preprocessor (sass, less, stylus)
- Pull request changes and new atoms, never work on master.
- If you can't fix issue or can't add new atom, then create an issue on github.