# ThemeJs

A simple librairy that manage your site theme.

## How to use it ?

1. Copy this link:

```
https://boubajoker.github.io/ThemeJs/src/dist.js
```

2. Open your Html file and write this code to link the librairy to your site:

```html
<script src="https://boubajoker.github.io/ThemeJs/src/dist.js"></script>
```

3. Then, (for example) open your main script and type:

```javascript
let themejs = new ThemeJs();

themejs.change_to_dark_mod("#dark_mod_btn");
```

## Commands

```js
change_bg_color()
```
- Change your page background in the color that you want, just type in the first args the element that you want to select for activate the bg change and type in second args rgb or html color.

```js
change_to_dark_mod()
```
- Change your page backround to the html color value: "#000", just type in the first args the element that you want to select for activate the bg change.

```js
change_to_light_mod()
```
- Change your page backround to the html color value: "#fff", just type in the first args the element that you want to select for activate the bg change.

```js
change_to_rgb()
```
- Change your page background into an rgb value, just type in the first args the element that you want to select for activate the bg change and then, you can type 'numbers' value expl: `change_to_rgb("#change_bg_color", 255, 255, 255)`.

## Therms and Conditions

See therms and conditions at [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) file or check those files:

- [CopyRight.txt](CopyRight.txt)
- [ThirdPartyNotices.txt](ThirdPartyNotices.txt)
- [LICENSE](LICENSE)
- [AUTHORS.md](AUTHORS.md)