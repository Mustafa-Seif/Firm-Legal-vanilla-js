// ------var--
const nav1 = document.querySelector(".navbarOne")
const nav2 = document.querySelector(".navbarTwo")
const link = document.querySelectorAll(".linksjs")
const toUp = document.querySelector(".toUP")
const dark = document.querySelector(".dark")
const body = document.querySelector("body")




// console.log(link);


window.onscroll = function () {
    // console.log(window.scrollY);

    //   ----nav----
    if (window.scrollY >= 100) {
        nav1.style.display = "none"
        nav2.classList.add("nav2JS")
        link.forEach(item => {
            if (window.scrollY >= 100) {
                item.classList.add("ggg")

            }

        });
    }

    else {

        toUp.classList.remove("toUpJs")

    }

    // -----------------


    if (window.scrollY <= 300) {

        link.forEach(item => {
            if (window.scrollY >= 100) {
                item.classList.remove("ggg")

            }

        });
    }


    // ----toup----
    if (window.scrollY >= 300) {
        toUp.classList.add("toUpJs")

    }

    else {
        nav1.style.display = "flex"
        nav2.classList.remove("nav2JS")



    }
}

// ----toup----
toUp.addEventListener("click",
    () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    })



// darkneess

dark.addEventListener("click", (eo) => {

    body.classList.toggle("darkness")
    dark.classList.toggle("dark2")



})




// here


const sec3 = document.querySelector(".sec3")
const card = document.querySelectorAll(".card")
const editfont = document.querySelectorAll(".editfont")




// console.log(editfont);


card.forEach(element => {
    element.onmouseover = function () {
        // element.classList.add("hh")
        element.style


    }

});



const menubar = document.querySelector(".menubar")
const menuRepo = document.querySelector(".menuRepo")


console.log(menubar);


menubar.onclick = function name(params) {
    menuRepo.classList.toggle("respon")
    
}

menuRepo.onclick = function () {
    this.classList.remove("respon")
    
}


// ----------------------------

const onloading = document.querySelector(".onloading")
// const bodyy = document.querySelector("body")



window.onload = function  () {
  
}



setTimeout(on, 2000);

function on(params) {
    onloading.style.display ="none"
    
}



















const goSearch = document.querySelector(".goSearch")
const goSearch2 = document.querySelector(".goSearch2")
const search = document.querySelector(".search")
const exitIcon = document.querySelector(".exitIcon")



goSearch.addEventListener("click", (params) => {
    search.classList.add("play")
})

goSearch2.addEventListener("click", (params) => {
    search.classList.add("play")
})

window.onload = function () {
    document.getElementById("searchInput").value = ""
}


// search.addEventListener("click" ,(params) => {
//     search.classList.remove("play")
// })


exitIcon.onclick = function () {
    search.classList.remove("play")

}






























// const HDS = function (el = null, options = {}) {
// 	class slider {
// 		constructor(options) {
// 			this.delay = 0; // delay in ms to begin the timer
// 			this.speed = 5000; // time in ms 'till next slide
// 			this.transition = 600; // time in ms for animation speed
// 			this.pagination = true;
// 			this.navigation = true;

// 			for (const k in options) {
// 				this[k] = options[k];
// 			}

// 			this.delay = parseInt(this.delay);
// 			this.speed = parseInt(this.speed);
// 			this.transition = parseInt(this.transition);
// 		}
// 	}

// 	const $ = {
// 		VARS: {
// 			slider: null,
// 			slides: null,
// 			options: {},
// 			timer: null,
// 			pagination: null,
// 		},
// 		init: async function () {
// 			if (el === null) {
// 				console.error("Please select a container for the slider");
// 				return;
// 			}
// 			$.VARS.slider = document.querySelector(el);
// 			$.VARS.options = new slider(options);

// 			await $.create();
// 		},
// 		create: async function () {
// 			const slides = document.createElement("div");
// 			slides.classList.add("hds_slides_container");

// 			const content = $.VARS.slider.innerHTML;
// 			slides.innerHTML = content;
// 			$.VARS.slider.innerHTML = "";
// 			$.VARS.slider.append(slides);
// 			$.VARS.slider.classList.add("hds_slider");

// 			$.VARS.slides = $.VARS.slider.getElementsByClassName("hds_slides_container")[0].children;
// 			for (let i = 0; i < $.VARS.slides.length; i++) {
// 				$.VARS.slides[i].classList.add("hds_slide");
// 			}

// 			$.VARS.slider.style.setProperty("--slide-transition-speed", $.VARS.options.transition + "ms");

// 			if ($.VARS.options.navigation === true) {
// 				$.navigation();
// 			}

// 			if ($.VARS.options.pagination === true) {
// 				$.pagination();
// 			}

// 			$.setActive($.VARS.slides[0]);
// 			setTimeout($.start, $.VARS.options.delay);
// 		},
// 		setActive: function (slide) {
// 			for (let i = 0; i < $.VARS.slides.length; i++) {
// 				$.VARS.slides[i].classList.remove("hds_slide_active");
// 			}
// 			slide.classList.add("hds_slide_active");

// 			if ($.VARS.options.pagination === true) {
// 				let index = 0;
// 				for (let i = 0; i < $.VARS.slides.length; i++) {
// 					if ($.VARS.slides[i].classList.contains("hds_slide_active")) {
// 						index = i;
// 						break;
// 					}
// 				}

// 				for (let i = 0; i < $.VARS.pagination.length; i++) {
// 					$.VARS.pagination[i].classList.remove("hds_pagination_item_active");
// 				}
// 				$.VARS.pagination[index].classList.add("hds_pagination_item_active");
// 			}
// 		},
// 		start: function () {
// 			$.VARS.timer = setInterval($.next, $.VARS.options.speed);
// 		},
// 		next: function () {
// 			clearInterval($.VARS.timer);
// 			const active = $.VARS.slider.getElementsByClassName("hds_slide_active")[0];
// 			if (active.nextElementSibling === null) {
// 				$.setActive($.VARS.slides[0]);
// 			} else {
// 				$.setActive(active.nextElementSibling);
// 			}
// 			$.start();
// 		},
// 		prev: function () {
// 			clearInterval($.VARS.timer);

// 			const active = $.VARS.slider.getElementsByClassName("hds_slide_active")[0];
// 			if (active.previousElementSibling === null) {
// 				$.setActive($.VARS.slides[$.VARS.slides.length - 1]);
// 			} else {
// 				$.setActive(active.previousElementSibling);
// 			}

// 			$.start();
// 		},
// 		navigation: function () {
// 			const nav = `<div class = "hds_nav_item hds_prev"><</div><div class = "hds_nav_item hds_next">></div>`;
// 			$.VARS.slider.insertAdjacentHTML("beforeend", nav);

// 			const prev = $.VARS.slider.getElementsByClassName("hds_prev")[0];
// 			const next = $.VARS.slider.getElementsByClassName("hds_next")[0];

// 			prev.addEventListener("click", $.prev);
// 			next.addEventListener("click", $.next);
// 		},
// 		pagination: function () {
// 			let html = '<div class = "hds_pagination">';
// 			for (let i = 0; i < $.VARS.slides.length; i++) {
// 				html += `<div class = "hds_pagination_item"></div>`;
// 			}
// 			html += "</div>";

// 			$.VARS.slider.insertAdjacentHTML("beforeend", html);
// 			$.VARS.pagination = $.VARS.slider.getElementsByClassName("hds_pagination_item");

// 			for (let i = 0; i < $.VARS.pagination.length; i++) {
// 				$.VARS.pagination[i].addEventListener("click", function () {
// 					if (this.classList.contains("hds_pagination_item_active")) {
// 						return;
// 					}
// 					let index = 0;
// 					for (let i = 0; i < $.VARS.pagination.length; i++) {
// 						if ($.VARS.pagination[i] === this) {
// 							index = i;
// 							break;
// 						}
// 					}
// 					$.setActive($.VARS.slides[index]);
// 				});
// 			}
// 		},
// 	};

// 	$.init(el, options);
// };
