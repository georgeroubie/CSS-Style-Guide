# CSS Style Guide

> This is the CSS Style Guide that I use, for my own apps.

## CSS Pre-Processor

> CSS pre-processors helpes you write reusable, maintainable and extensible CSS code. You increase your productivity, and decrease the amount of code you are writing in a project.

I prefer Sass, Sass is the most mature, stable, and powerful professional grade CSS extension language.

## JavaScript Task Runner

> Task runners literally they just run tasks. You can specify which tasks you want a task runner to perform and it will do all the work for you. 

I prefer Gulp, Gulp is a tool that helps you out with several tasks when it comes to web development (CSS minification, autoprefixing, compiling Sass, JavaScript bundling e.g.).

## Prefix

* I use the [Autoprefixer](https://github.com/postcss/autoprefixer) for prefixing CSS properties.

* In the case that Autoprefixer does not prefix a property (which is not very often), you should prefix your css properties with `-webkit-`, `-moz-`, `-ms-` and `-o-`. The declaration's value must lines up vertically for easy multi-line editing.

```scss
// BAD Example

@mixin rotate-element($deg) {
  -webkit-transform: rotate($deg);
  -moz-transform: rotate($deg);
  -ms-transform: rotate($deg);
  -o-transform: rotate($deg);
  transform: rotate($deg);
}

// GOOD Example

@mixin rotate-element($deg) {
  -webkit-transform: rotate($deg);
     -moz-transform: rotate($deg);
      -ms-transform: rotate($deg);
       -o-transform: rotate($deg);
          transform: rotate($deg);
}
.selector { @include rotate-element(45deg); }

```

## Naming

* Name your CSS Classes based on what they are, not what they look like.
* Use hyphens for CSS Classes `.btn-warning`.
* Use hyphens for variable names `$my-variable`.
* Use hyphens for mixin names `@mixin font-style(){ ... }`.

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
* Use single `'` quotes instead of double quotes `"`.
* Avoid specifying units for zero values, e.g., `padding: 0;` instead of `padding: 0px;`.
* Use `border: 0;` over `border: none;`.
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

* Use hex color codes `#000` instead of using rgb or name colors.
* Lowercase all hex values, e.g., `#fff`. Lowercase letters are much easier to discern when scanning a document as they tend to have more unique shapes.
* Use shorthand hex values where available, e.g., `#fff` instead of #ffffff.
* Don't include spaces after commas within `rgba()`, `hsla()`, or `rect()` values.

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

## Nesting

Do not nest selectors more than three levels deep. When selectors become this long, you're writing CSS that is:
* Strongly coupled to the HTML
* Not reusable

## Selectors

* Always use Classes.
* Don't use IDs. ID selectors introduce an unnecessarily high level of specificity to your rule declarations, and they are not reusable.
* Don't use element name selector `.btn > span` or `.btn > span.icon`.

## JavaScript

Don't bind the same class in both your CSS and JavaScript. Create a JavaScript-specific class prefixed with `.js-`

```html
  <a href="btn js-go-to-top">Top</a>
```