# CSS Style Guides

> This is the CSS Style Guide that I use, for my own apps.

## Naming

* Name your CSS Classes and IDs based on what they are, not what they look like
* Use hyphens for CSS Classes `.btn-warning`
* Use underscores for CSS IDs `#top_menu`

## Comments

* Use `//` insted of `/* */`, if you are using a CSS Preprocessor
* Include one space after the `//`
* Use comment section to explain what the class does

```scss
// BAD Example
/*inline form element*/
.inline-form-element {
}

// GOOD Example
// inputs, buttons and text areas will be displayed in the same line
.inline-form-element {
}
```

## Syntax
* Include one space before the opening brace `{` in rule declarations
* Include one space after the colon `:` in property declarations
* Property declaration should appear on its own line for more accurate error reporting
* End all properties declarations with a semi-colon. The last property declaration is optional, but your code is more error prone without it
* In instances where a rule set includes only one declaration, consider removing line breaks for readability and faster editing.

```scss
// Syntax Example
.btn {
  display: inline-block;
  color: #e0e0e0;
}
.btn-warning { color: #ff0000; }
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


