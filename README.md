# CSS Style Guides

> This is the CSS Style Guide that I use, for my own apps.

## Naming

* Name your CSS Classes and IDs based on what they are, not what they look like
* Use hyphens for CSS Classes `.btn-warning`
* Use underscores for CSS IDs `#top_menu`

## Comments

* Use `//` insted of `/* */`, if you are using a CSS Preprocessor
* Use comment section to explain what the class does

```scss
// BAD Example
// inline form element
.inline-form-element{
}

// GOOD Example
// inputs, buttons and text areas will be displayed in the same line
.inline-form-element{
}
```

## Prefix

* For the best possible browser support, you should prefix css properties with `-webkit-`, `-moz-`, `-ms-` and `-o-`. Use the follow syntax:

```css
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


