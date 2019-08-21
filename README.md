# CSS Style Guide
> This is the CSS Style Guide that [Pobuca](https://www.pobuca.com) uses in every Front-End Project.    

This file also comes with a `.stylelintrc`, a `.stylelintignore` and an `INSTALLATION.md`.

# CSS Pre-Processor
> CSS pre-processors helps you write reusable, maintainable and extensible CSS code. You increase your productivity, and decrease the amount of code you are writing in a project.

`SCSS` is the most mature, stable, and powerful professional grade CSS extension language.

# CSS Browser Prefixes
> CSS browser prefixes, also known as or CSS vendor prefixes, are a way for browser makers to add support for new CSS features before those features are fully supported in all browsers. 

`Autoprefixer` is a PostCSS plugin which parses your CSS and adds vendor prefixes

# JavaScript Task Runner
> Task runners literally they just run tasks. You can specify which tasks you want a task runner to perform and it will do all the work for you. 

`Gulp` is a tool that helps you out with several tasks when it comes to web development (CSS minification, autoprefixing, compiling Sass, JavaScript bundling e.g.).

# CSS Linter
> lint, or a linter, is a tool that analyzes source code to flag programming errors, bugs, stylistic errors, and suspicious constructs.

`Stylelint` is a mighty, modern linter that helps you avoid errors and enforce conventions in your styles.

# Rules

## Possible errors

### Color
 - Disallow invalid hex colors

```scss
// Violation
.btn {
    color: #ffz;
}

// Not violation
.btn {
    color: #fff;
}
```

### Font family
 - Disallow duplicate font family names.
```scss
// Violation
body {
    font-family: 'Courier New', Arial, 'Courier New';
}

// Not violation
body {
    font-family: 'Courier New', Arial;
}
```
 - Disallow missing generic families in lists of font family names.

```scss
// Violation
body {
    font-family: 'Courier New';
}

// Not violation
body {
    font-family: 'Courier New', sans-serif;
}
```

### Function
 - Disallow an invalid expression within `calc` functions.
```scss
// Violation
.btn {
    width: calc(100% - - 80px);
}

// Not violation
.btn {
    width: calc(100% - 80px);
}
```
 - Disallow an unspaced operator within `calc` functions.
```scss
// Violation
.btn {
    top: calc(1px+2px);
}

// Not violation
.btn {
    top: calc(1px + 2px);
}
```
 - Disallow direction values in `linear-gradient()` calls that are not valid according to the [standard syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient#Syntax).
```scss
// Violation
.btn {
    background: linear-gradient(top, #fff, #000);
}

// Not violation
.btn {
    background: linear-gradient(to top,#fff,#000);
}
```

### String
 - Disallow (unescaped) newlines in strings.

```scss
// Violation
.btn {
    content: 'Hello 
        World';
}

// Not violation
.btn {
    content: 'Hello World';
}
```

### Unit
 - Disallow unknown units.

```scss
// Violation
.btn {
    width: 10pixels;
}

// Not violation
.btn {
    width: 10px;
}
```

### Property
 - Disallow unknown properties.

```scss
// Violation
.btn {
    colr: #fff;
}

// Not violation
.btn {
    color: #fff;
}
```

### Keyframe declaration
 - Disallow `!important` within keyframe declarations. Using `!important` within keyframes declarations is completely ignored in some browsers.

```scss
// Violation
@keyframes important {
    from { 
        margin: 10px;
    }

    to { 
        margin: 20px !important;
    }
}

// Not violation
@keyframes important {
    from { 
        margin: 10px;
    }

    to { 
        margin: 20px;
    }
}
```

### Declaration block
 - Disallow duplicate properties within declaration blocks. Ignore consecutive duplicated properties. They can prove to be useful fallbacks for older browsers.
```scss
// Violation
.btn {
    color: #fff;
    font-size: 16px;
    font-weight: 400;
    font-size: 1rem;
    color: #000;
}

// Not violation
.btn {
    color: #000;
    font-size: 16px;
    font-size: 1rem;
    font-weight: 400;
}
```
 - Disallow shorthand properties that override related longhand properties.
```scss
// Violation
.btn {
    padding-left: 10px;
    padding: 20px;
}

// Not violation
.btn {
    padding: 20px;
    padding-left: 10px;
}
```

### Selector
 - Disallow unknown pseudo-class selectors.
```scss
// Violation
.btn {
    &:hoverr {
        color: #fff;
    }
}

// Not violation
.btn {
    &:hover {
        color: #fff;
    }
}
```
 - Disallow unknown pseudo-element selectors.
```scss
// Violation
.btn {
    &:befor {
        content: 'hi';
    }
}

// Not violation
.btn {
    &:before {
        content: 'hi';
    }
}
```

### Comment
 - Disallow empty comments.

```scss
// Violation
/* */

// Not violation
/* News article */
```

### General / Sheet
 - Disallow selectors of lower specificity from coming after overriding selectors of higher specificity.
```scss
// Violation
.btn a {
    color: #fff;
}
a {
    color: #000;
}

// Not violation
a {
    color: #000;
}
.btn a {
    color: #fff;
}
```
 - Disallow duplicate `@import` rules within a stylesheet.
```scss
// Violation
@import 'a.css';
@import 'a.css';

// Not violation
@import 'a.css';
```
 - Disallow duplicate selectors within a stylesheet.
```scss
// Violation
.btn {
    background: #fff;
}
.btn {
    background: #000;
}

// Not violation
.btn {
    background: #000;
}
```
 - Disallow extra semicolons.
```scss
// Violation
.btn {
    color: #fff;;
}

// Not violation
.btn {
    color: #fff;
}
```

## Limit language features

### Color
 - Disallow named colors.
```scss
// Violation
.btn {
    color: black;
}

// Not violation
.btn {
    color: #000;
}
```

### Function
 - Disallow scheme-relative urls. A scheme-relative url is a url that begins with // followed by a host.
```scss
// Violation
.btn {
    background: url('//www.google.com/file.jpg');
}

// Not violation
.btn {
    background: url('../file.jpg');
}
```

### Keyframes
 - Keyframe names must follow this pattern: `/^[a-z0-9]+(-[a-z0-9]+)*$/`. Only lowercase letters, numbers and hyphens.
```scss
// Violation
@keyframes SlideRight { }

// Not violation
@keyframes slide-right { }
```

### Number
 - Limit the number of decimal places allowed in numbers to `2`.
```scss
// Violation
.btn {
    font-size: 30.654px;
}

// Not violation
.btn {
    font-size: 30.65px;
}
```

### Shorthand property
 - Disallow redundant values in shorthand properties.
```scss
// Violation
.btn {
    margin: 1px 1px 1px 1px;
}

// Not violation
.btn {
    margin: 1px;
}
```

### Custom property
 - Custom property names must start with `--` follow this pattern: `/^[a-z0-9]+(-[a-z0-9]+)*$/`. Only lowercase letters, numbers and hyphens.
```scss
// Violation
:root { 
    --myProperty: 0; 
}

// Not violation
:root { 
    --my-property: 0; 
}
```

### SCSS variables, mixins and placeholders
 - SCSS variables, mixins and placeholders must follow this pattern: `/^[a-z0-9]+(-[a-z0-9]+)*$/`. Only lowercase letters, numbers and hyphens.
```scss
// Violation
$myVariable: #000;
@mixin fontStyle() { }
%resetInput { }

// Not violation
$my-variable: #000;
@mixin font-style() { }
%reset-input { }
```

### Property
 - Disallowed properties:
   + `border: none`, use `border: 0` instead

### Declaration block
 -  Limit the number of declarations within a single-line declaration block to `1`.
```scss
// Violation
.btn {
    color: #fff; font-size: 1rem;
}

// Not violation
.btn {
    color: #fff;
    font-size: 1rem;
}
```

### Selector
 - Class names must follow this pattern: `/^[a-z0-9]+(-[a-z0-9]+)*$/`. Only lowercase letters, numbers and hyphens.
```scss
// Violation
.btnMain { }

// Not violation
.btn-main { }
```
 - ID selectors must follow this pattern: `/^[a-z0-9]+(_[a-z0-9]+)*$"/`. Only lowercase letters, numbers and underscores.
```scss
// Violation
#mainContainer { }

// Not violation
#main_container { }
```
 - Disallow empty lines within selectors.
```scss
// Violation
.btn,

.btn-main {
    color: #fff;
}

// Not violation
.btn,
.btn-main {
    color: #fff;
}
```
 - Don't use ID selectors, but if it is required you can't nest ID selectors. ID selectors introduce an unnecessarily high level of specificity to your rule declarations, and they are not reusable.
```scss
// Violation
#main_container {
    background: #000;
    #news_container {
        background: #fff;
    }
}

// Not violation
#main_container {
    background: #000;
}
 #news_container {
    background: #fff;
}
```
- Disallow qualifying a selector by type. Don't use element name selectors with IDs and Classes.
```scss
// Violation
.btn > span.icon {
    color: #fff;
}

// Not violation
.btn > .icon {
    color: #fff;
}
```

### General / Sheet
 - Limit the depth of nesting to `3`. When selectors become this long, you're writing CSS that is strongly coupled to the HTML and not reusable.
```scss
// Violation
.main {
    .container {
        color: #000;
        .news {
            padding: 10px;
            .btn {
                .icon {
                    color: #fff;
                }
            }
        }
    }
}

// Not violation
.main .container {
    color: #000;
    .news {
        padding: 10px;
    }
}
.btn {
    .icon {
        color: #fff;
    }
}
```

## Stylistic issues

### Color
 - Lowercase hex colors
```scss
// Violation
$mainColor: #D32F2F;

// Not violation
$mainColor: #d32f2f;
```
 - Name your SCSS color variables with [this](http://chir.ag/projects/name-that-color)
```scss
// Violation
$red: #D32F2F;

// Not violation
$persian-red: #d32f2f;
```

### Font family
 - Used quotation marks around font family names always where recommended. A font family name should use quotes around it if it contains numbers, special characters, spaces or it's name is in camelcase.
```scss
// Violation
.btn {
    font-family: Times New Roman, MyFontVersion6, 'Times', 'serif', sake_case_font;
}

// Not violation
.btn {
    font-family: 'Times New Roman', 'MyFontVersion6', Times, serif, 'sake_case_font';
}
```

### Font weight
 - Use numeric `font-weight` values.
```scss
// Violation
.btn {
    font-weight: normal;
}

// Not violation
.btn {
     font-weight: 400;
}
```

### Function
 - Do not use whitespace before and after the commas of functions.
```scss
// Violation
.btn {
    transform: translate( 1 , 1 );
}

// Not violation
.btn {
    transform: translate(1,1);
}
```
 - Lowercase the function names.
```scss
// Violation
.btn {
    transform: TRANSLATE(1,1);
}

// Not violation
.btn {
    transform: translate(1,1);
}
```
 - Use a whitespace after functions.
```scss
// Violation
.btn {
    transform: translate(1,1)scale(3);
}

// Not violation
.btn {
    transform: translate(1,1) scale(3);
}
```

### Number
 - There must never be a leading zero for fractional numbers less than 1.
```scss
// Violation
.btn {
    line-height: 0.5;
}

// Not violation
.btn {
    line-height: .5;
}
```
 - Remove trailing zeros in numbers.
```scss
// Violation
.btn {
    line-height: 1.50px;
}

// Not violation
.btn {
    line-height: 1.5px;
}
```

### String
 - Use single quotes around strings.
```scss
// Violation
.btn {
    content: "Hello World";
}

// Not violation
.btn {
    content: 'Hello World';
}
```

### Length
 - Disallow units for zero lengths, except your custom properties.
```scss
// Violation
.btn {
    padding: 0px;
}

// Not violation
.btn {
    padding: 0;
}
:root {
    --my-property: 0px;
}
```

### Unit
 - Lowercase all the units.
```scss
// Violation
.btn {
    padding: 10PX;
}

// Not violation
.btn {
    padding: 10px;
}
```

### Value
 - Lowercase all the keywords values.
```scss
// Violation
.btn {
    display: BLOCK;
}

// Not violation
.btn {
    display: block;
}
```

### Value list
 - Use a single space or a whitespace after the commas of value lists.
```scss
// Violation
.btn {
    background-size: 0,0;
}

// Not violation
.btn {
    background-size: 0, 0;
}
```

### Property
 - Lowercase all properties.
```scss
// Violation
.btn {
    DISPLAY: block;
}

// Not violation
.btn {
    display: block;
}
```

### Declaration
 - Require a single space before the bang and disallow whitespace after the bang of declarations.
```scss
// Violation
.btn {
    color: #000! important;
}

// Not violation
.btn {
    color: #000 !important;
}
```
 - Require a single space after the colon and disallow whitespace before the colon of declarations.
```scss
// Violation
.btn {
    color :#000;
}

// Not violation
.btn {
    color: #000;
}
```

### Declaration block
- Start a newline after the semicolons of declaration blocks.
```scss
// Violation
.btn {
    color: #000; font-size: 1rem;
}

// Not violation
.btn {
    color: #000;
    font-size: 1rem;
}
```
 - Disallow whitespace before the semicolons of declaration blocks.
```scss
// Violation
.btn {
    color: #000 ;
}

// Not violation
.btn {
    color: #000;
}
```
 - Require a trailing semicolon within declaration blocks. In CSS is optional, but your code is more error prone without it.
```scss
// Violation
.btn {
    color: #000;
    font-size: 1rem
}

// Not violation
.btn {
    color: #000;
    font-size: 1rem;
}
```

### Block
 - Disallow an empty line before the closing brace of blocks.
```scss
// Violation
.btn {
    color: #000;

}

// Not violation
.btn {
    color: #000;
}
```

### Selector

 - Disallow whitespace on the inside of the brackets within attribute selectors.
```scss
// Violation
[ target='_blank' ] { }

// Not violation
[target='_blank'] { }
```
 - Require quotes for attribute values.
```scss
// Violation
[target=_blank] { }

// Not violation
[target='_blank'] { }
```
- Require a single space before and after the combinators and descendant combinators of selectors.
```scss
// Violation
.btn>.icon {
    color: #000;
}
.btn 
.icon {
    color: #000;
}

// Not violation
.btn > .icon {
    color: #000;
}
.btn .icon {
    color: #000;
}
```
 - Lowercase pseudo-class selectors.
```scss
// Violation
.btn:HOVER {
    color: #000;
}

// Not violation
.btn:hover {
    color: #000;
}
```
 - Disallow whitespace on the inside of the parentheses within pseudo-class selectors.
```scss
// Violation
.btn:not( [type='submit'] ) {
    color: #000;
}

// Not violation
.btn:not([type='submit']) {
    color: #000;
}
```
 - Lowercase pseudo-element selectors.
```scss
// Violation
.btn:BEFORE {
    color: #000;
}

// Not violation
.btn:before {
    color: #000;
}
```
 - Use single colon notation for applicable pseudo-elements.
```scss
// Violation
.btn::before {
    color: #000;
}

// Not violation
.btn:before {
    color: #000;
}
```
 - Lowercase all type selectors.
```scss
// Violation
SPAN {
    color: #000;
}

// Not violation
span {
    color: #000;
}
```

### Selector list
 - Require a newline after the commas of selector lists.
```scss
// Violation
.btn,.icon {
    color: #000;
}

// Not violation
.btn,
.icon {
    color: #000;
}
```

### Rule
 - Require an empty line before rules, when it's not after a comment or it's not the first nested.
```scss
// Violation
.btn {
    color: #000;
}
.icon {
    color: #000;
}

// Not violation
.btn {
    color: #000;
}

.icon {
    color: #000;
}
```

### Media feature
 - Require a single space after the colon in media features.
```scss
// Violation
@media (max-width:600px) { }
@media (max-width :800px) { }

// Not violation
@media (max-width: 600px) { }
@media (max-width: 800px) { }
```
- Disallow whitespace on the inside of the parentheses within media features.
```scss
// Violation
@media ( max-width:600px ) { }

// Not violation
@media (max-width: 600px) { }
```
 - Require a single space before and after the range operator in media features.
```scss
// Violation
@media (width>=600px) { }

// Not violation
@media (width >= 600px) { }
```

### Media query list
- Require a single space after the commas of media query lists and disallow whitespace before the commas of media query lists.
```scss
// Violation
@media screen and (color),projection and (color) { }

// Not violation
@media screen and (color), projection and (color) { }
```

### At-rule
 - Require an empty line before at-rules, when it's not after comment, or inside block or after the same at-rule.
```scss
// Violation
@charset 'UTF-8';
@media (width >= 600px) { }

// Not violation
@charset 'UTF-8';

@media (width >= 600px) { }
```
 - Lowercase all at-rules names.
```scss
// Violation
@MEDIA (width >= 600px) { }

// Not violation
@media (width >= 600px) { }
```
 - Require a newline after the semicolon of at-rules.
```scss
// Violation
@charset 'UTF-8';@media (width >= 600px) { }

// Not violation
@charset 'UTF-8';

@media (width >= 600px) { }
```
 - Disallow whitespace before the semicolons of at-rules.
```scss
// Violation
@charset 'UTF-8' ;

// Not violation
@charset 'UTF-8';
```

### Comment
 - Require an empty line before comments, when the comment is not in the beginning of the nesting.
 - Require a single space on the inside of comment markers.
```scss
// Violation
/*Hello*/
//World

// Not violation
/* Hello */
// World
```

### General / Sheet 
 - Use 4 spaces tabs.
 - Limit the number of empty lines to `2`.
 - Limit the length of a line to `150` characters.
 - Disallow end-of-line whitespace.
 - Disallow empty first lines.


## JavaScript
Don't bind the same class in both your CSS and JavaScript. Create a JavaScript-specific class prefixed with `.js-`

```html
  <a href="#" class="btn js-go-to-top">Top</a>
```
