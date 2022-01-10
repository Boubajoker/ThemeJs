let dark_mod_btn = document.querySelector("#dark_mod_btn");

dark_mod_btn.addEventListener('click', ()=>{
    let themejs = new ThemeJs();
    themejs.change_bg_color("#000")
})