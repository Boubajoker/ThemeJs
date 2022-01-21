'use strict';

class ThemeJs {
    quick_dark_btn_id = "#dark_mod_btn";
    quick_light_btn_id = "#light_mod_btn";
    /* 
    * Change your page background in the color that you want, just type in the first args the element that you want to select for activate the bg change and type in second args rgb or html color. 
    */
    change_bg_color(el, color, chng_color_btn=null) {
        chng_color_btn = document.querySelector(el);
        chng_color_btn.addEventListener('click', ()=>{
            document.body.style.backgroundColor = color;
        });
        return undefined;
    };

    /* 
    * Change your page backround to the html color value: '#000', just type in the first args the element that you want to select for activate the bg change. 
    */
    change_to_dark_mod(el, drk_btn=null) {
        drk_btn = document.querySelector(el);
        drk_btn.addEventListener('click', ()=>{
            document.body.style.backgroundColor = '#000';
        });
        return undefined;
    };

    /* 
    * Change your page backround to the html color value: '#fff', just type in the first args the element that you want to select for activate the bg change. 
    */
    change_to_light_mod(el, ligh_btn=null) {
        ligh_btn = document.querySelector(el);
        ligh_btn.addEventListener('click', ()=>{
            document.body.style.backgroundColor = '#fff';
        });
        return undefined;
    };
    
    /* 
    * Change your page background into an rgb value, just type in the first args the element that you want to select for activate the bg change and then, you can type 'int' value (args1=R args2=G args3=B). 
    */
    change_to_rgb(el, r, g, b, chng_rgb=null) {
        chng_rgb = document.querySelector(el)
        chng_rgb.addEventListener('click', ()=>{
            document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        });
        return undefined;
    };
};
class TjsbrowserExtension {
    Support(browser_extension=false) {
        if (browser_extension) {
            sessionStorage.setItem("Module ThemeJs is active", true);
        };
        return undefined;
    };
};