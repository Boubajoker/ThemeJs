/* ThemeJs Copyright (c) Boubajoker 2022. All right reserved.
Project under MIT License. */
// See `CopyRight.txt` file for more info in Github repo

// demo script 
let themejs = new ThemeJs();
let tjsextension  = new TjsbrowserExtension();

themejs.change_bg_color("#color_mod_btn", "grey");
themejs.change_to_dark_mod(themejs.quick_dark_btn_id);
themejs.change_to_light_mod(themejs.quick_light_btn_id);
themejs.change_to_rgb("#rgb_value", 255, 255, 120);
tjsextension.Support(true);
/* site script */

let copy_js = document.querySelector("#copy_js");
let copy_html = document.querySelector("#copy_html");
let date = new Date()

document.cookie = `loaded at ${date.getFullYear()} ${date.getDate()} ${date.getHours()}:${date.getMinutes()}, ${date.getSeconds()}sec.`;

copy_js.addEventListener('click' ,()=>{
    navigator.clipboard.writeText(`let dark_mod_btn = document.querySelector('#dark_mod_btn');\n\ndark_mod_btn.addEventListener('click', ()=>{\n    let themejs = new ThemeJs();\n    themejs.change_bg_color('#000')\n});`);
});
copy_html.addEventListener('dblclick', ()=>{
    print();
})
copy_js.addEventListener('dblclick', ()=>{
    print();
});
copy_html.addEventListener('click', ()=>{
    navigator.clipboard.writeText("<script src=\"https://boubajoker.github.io/ThemeJs/src/dist.js\"></script>");
});