/* ThemeJs Copyright (c) Boubajoker 2022. All right reserved.
Project under MIT License. */
// See `CopyRight.txt` file for more info in Github repo
// demo script 
let color_btn = document.querySelector("#color_mod_btn");
let dark_mod = document.querySelector("#dark_mod_btn");
let light_mod = document.querySelector("#light_mod_btn");
let themejs = new ThemeJs();

color_btn.addEventListener('click', ()=>{
    themejs.change_bg_color("#474747");
});

dark_mod.addEventListener('click', ()=>{
    themejs.change_to_dark_mod();
});
light_mod.addEventListener('click', ()=>{
    themejs.change_to_light_mod();
});

/* site script */

let copy_code_btn = document.querySelector("#copy_code");

copy_code_btn.addEventListener('click' ,()=>{
    navigator.clipboard.writeText("let dark_mod_btn = document.querySelector('#dark_mod_btn');\n\ndark_mod_btn.addEventListener('click', ()=>{\n    let themejs = new ThemeJs();\n    themejs.change_bg_color('#000')\n});")
});