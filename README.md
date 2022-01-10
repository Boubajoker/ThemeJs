# ThemeJs

A simple librairy that manage your site theme.

# How to use it ?

1. Copy this link:

```
https://boubajoker.github.io/ThemeJs/src/dist.js
```

2. Open your Html file and write this code to link the librairy to your site:

```html
<script src="https://boubajoker.github.io/ThemeJs/src/dist.js"></script>
```

3. Then, (for example) open your main script and type:

```js
let drak_mod_btn = document.querySelector("#drak_mod_btn");

dark_mod_btn.addEventListener('click' ()=>{
    let themejs = new ThemeJs()
    themejs.change_bg_color("#000")
})
```