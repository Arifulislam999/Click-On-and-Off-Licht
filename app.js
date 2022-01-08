let img_1 = document.querySelector("#im-1");
let img_2 = document.querySelector("#im-2");
let btn = document.querySelector("button");
btn.addEventListener("click", () => {
    if (btn.innerHTML === "Light On") {
        btn.innerHTML = "Light Off";
        // img_2.src = img_1.src;
        img_2.style.zIndex = -1;
        img_1.style.zIndex = 1;
    } else {
        btn.innerHTML = "Light On";
        img_1.style.zIndex = -1;
        img_2.style.zIndex = 1;
    }
});

//menu bar......

let wel = document.querySelector("#wel");
let imag_model = document.querySelector(".imag-model");
wel.innerHTML = "Welcome!!!! Click The Menu Bar.";
let menu = document.querySelector(".menu");
let sp = document.querySelector("#sp");
imag_model.style.display = "none";
let Arif = document.querySelector("#Arif");
menu.addEventListener("click", () => {
    menu.classList.toggle("cross");
    if (wel.innerHTML == "Welcome!!!! Click The Menu Bar.") {
        imag_model.style.display = "inline";

        wel.innerHTML = "";
    } else {
        wel.innerHTML = "Welcome!!!! Click The Menu Bar.";
        imag_model.style.display = "none";
    }
});