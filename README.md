# CSS Style Guide

> This is the CSS Style Guide that I use, for my own apps.

## CSS Pre-Processor

> Pre-processors helpes you write reusable, maintainable and extensible codes in CSS. By using a pre-processor, you increase your productivity, and decrease the amount of code you are writing in a project.

I prefer Sass, Sass is the most mature, stable, and powerful professional grade CSS extension language.

## JavaScript Task Runner

I prefer Gulp, Gulp is a tool that helps you out with several tasks when it comes to web development.

## Naming

* Name your CSS Classes and IDs based on what they are, not what they look like.
* Use hyphens for CSS Classes `.btn-warning`.
* Use underscores for CSS IDs `#top_menu`.

## Comments

* Use `//` insted of `/* */`.
* Include one space after the `//`.
* Use comment section to explain what the class does.
* Comments should always follow by a new line.
* Hints comments should always appear in the same line with the css properties.

```scss
// BAD Example
/*inline form element*/
.inline-form-element { display: inline-block; }
/*Button Icon*/
.btn {
  &:after {
    /*Car Icon*/
    content: '\u450';
  }
}

// GOOD Example
// inputs, buttons and text areas will be displayed in the same line

.inline-form-element { display: inline-block; }

// Add an icon to the end of a button

.btn {
  &:after {
    content: '\u450'; // Car Icon
  }
}
```

## Syntax

* Include one space before the opening brace `{` in rule declarations.
* Include one space after the colon `:` in property declarations.
* Include one space after comma `,`.
* Property declaration should appear on its own line for more accurate error reporting.
* End all properties declarations with a semi-colon. The last property declaration is optional, but your code is more error prone without it.
* Always start a new line for each selector.
* In instances where a rule set includes only one declaration, consider removing line breaks for readability and faster editing.
* Try to use single `'` quotes instead of double quotes `"`.
* Avoid specifying units for zero values, e.g., `padding: 0;` instead of `padding: 0px;`.
* Prefer `border: 0;` over `border: none;`.
* Strip out the zero for decimal number, prefer `.9s` over `0.9s`.
* Parentheses should not be padded with spaces and don't add a space after mixin name.

```scss
// Syntax Example

.btn,
.btn.default {
  margin: 0;
  padding: 0;
  border: 0;
}
.btn[type='submit'] {
  display: inline-block;
  background-color: rgba(0,0,0,0.5);
  color: #e0e0e0;
  @include rotate-element(45deg); // Bad example is: @include rotate-element ( 45deg );
}
.btn-warning { color: #ff0000; }

```

## Colors

* Use hex color codes #000 instead of using rgb or name colors.
* Lowercase all hex values, e.g., #fff. Lowercase letters are much easier to discern when scanning a document as they tend to have more unique shapes.
* Use shorthand hex values where available, e.g., #fff instead of #ffffff.
* Don't include spaces after commas within rgba(), hsla(), or rect() values.

```scss
// BAD Example

.btn-warning {
  color: red;
  border-color: #FFFFFF;
  background-color: rgba(0, 0, 0, 0.5);
}

// GOOD Example

.btn-warning {
  color: #ff0000;
  border-color: #fff;
  background-color: rgba(0,0,0,.5);
}
```

## Prefix

* For the best possible browser support, you should prefix css properties with `-webkit-`, `-moz-`, `-ms-` and `-o-`, when it's necessary. The declaration's value must lines up vertically for easy multi-line editing.

```scss
// Example

.selector {
  -webkit-transform: rotate(45deg);
     -moz-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
       -o-transform: rotate(45deg);
          transform: rotate(45deg);
}
```
* If you are using a CSS Preprocessor create a mixin for prefixing:

```scss
@mixin rotate-element($deg) {
  -webkit-transform: rotate($deg);
     -moz-transform: rotate($deg);
      -ms-transform: rotate($deg);
       -o-transform: rotate($deg);
          transform: rotate($deg);
}
.selector { @include rotate-element(45deg); }
```
* Of cource you can use [Autoprefixer](https://github.com/postcss/autoprefixer) for prefixing CSS properties, with grunt or gulp.

