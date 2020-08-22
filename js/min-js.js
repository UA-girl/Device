let open_catalog = document.getElementById("open-catalog");

open_catalog.addEventListener("click", function (event) {
    event.preventDefault();
    let menu = document.getElementsByClassName("catalog-dropdown")[0];
    menu.classList.toggle("hidden");

});


let slide_index = 0;
let slides = document.getElementsByClassName("slide-popular");
let timer;
if (slides.length > 0) {
    showSlides(slide_index);
}

// Thumbnail image controls
function currentSlide(n) {
    slide_index = n;
    clearTimeout(timer);
    showSlides(slide_index);
}

function showSlides(slide_index) {

    for (let i = 0; i < slides.length; i++) {
        if (!slides[i].classList.contains("hidden")) {
            slides[i].classList.add("hidden")
        }
    }

    if (slide_index >= slides.length) {
        slide_index = 0;
    }
    slides[slide_index].classList.toggle("hidden");
    slide_index += 1;
    timer = setTimeout(showSlides, 5000, slide_index)
}


let slides_condition = document.getElementsByClassName("slide-conditions");
let slides_condition_buttons = document.getElementsByClassName("list-conditions-link");

function showSlideCondition(n) {
    for (let i = 0; i < slides_condition.length; i++) {
        if (!slides_condition[i].classList.contains("hidden")) {
            slides_condition[i].classList.add("hidden")
        }
    }

    for (let i = 0; i < slides_condition_buttons.length; i++) {
        slides_condition_buttons[i].classList.remove("active");
        slides_condition_buttons[i].classList.add("link-line")
    }

    slides_condition[n].classList.toggle("hidden");
    slides_condition_buttons[n].classList.remove("link-line");
    slides_condition_buttons[n].classList.add("active")
}

let write_us_close = document.getElementById("write-btn-close");
let write_us_open = document.getElementById("write-btn-open");
let write_us = document.getElementById("write-us");

if (write_us_open) {
    write_us_open.addEventListener("click", function (event) {
        event.preventDefault();
        write_us.classList.toggle("hidden")
    });
}

if (write_us_close) {
    write_us_close.addEventListener("click", function (event) {
        event.preventDefault();
        write_us.classList.toggle("hidden")
    });
}

let range_min = document.getElementById("range-min");
let range_max = document.getElementById("range-max");

function ChangeOutput(element, value) {
    let s = element.innerHTML.slice(0, 3);
    s += value;
    element.innerHTML = s
}

if (range_min) {
    range_min.addEventListener("input", function (event) {
        event.preventDefault();
        let range_min_output = document.getElementById("range-output-min");
        ChangeOutput(range_min_output, range_min.value);
    })
}

if (range_max) {
    range_max.addEventListener("input", function (event) {
        event.preventDefault();
        let range_max_output = document.getElementById("range-output-max");
        ChangeOutput(range_max_output, range_max.value);
    })
}

