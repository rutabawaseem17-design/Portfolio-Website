const fill = document.querySelector(".loading-fill");
const girl = document.querySelector(".loading-girl");
const loader = document.querySelector(".loader");

window.addEventListener("load",()=>{

    let progress = 0;

    const loading = setInterval(()=>{

        progress++;

        fill.style.width = progress + "%";

        girl.style.left = `calc(${progress}% - 35px)`;

        if(progress >=100){

            clearInterval(loading);

            setTimeout(()=>{

                loader.classList.add("hide");

            },300);

        }

    },10);

});


// night mode


const btn = document.getElementById("theme-btn");
const icon = btn.querySelector("i");

btn.onclick = () => {
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    }else{
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
};

// Aboutme

const rightSide = document.querySelector(".right-side");
const leftSide = document.querySelector(".left-side");
const profileCard = document.querySelector(".profile-card");
const tags = document.querySelectorAll(".tag");

function startAboutAnimation(){

    // Card appears in center
    rightSide.classList.add("show");

    // Move to right
    setTimeout(()=>{
        rightSide.classList.add("move");
    },600);

    // Left side appears
    setTimeout(()=>{
        leftSide.classList.add("show");
    },1600);

    // Tags appear one by one
    setTimeout(()=>{

        tags.forEach((tag,index)=>{

            setTimeout(()=>{
                tag.classList.add("show");
            },index*250);

        });

    },2200);

    // Start floating
    setTimeout(()=>{

        profileCard.classList.add("float");

        tags.forEach(tag=>{
            tag.classList.add("float");
        });

    },3000);

}

setTimeout(()=>{

    document.querySelector(".loader").classList.add("hide");

    startAboutAnimation();

},2500);


// graphic

// =========================
// FILTER
// =========================

const filterBtns = document.querySelectorAll(".filter-btn");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filterBtns.forEach(btn=>{

    btn.addEventListener("click",()=>{


        filterBtns.forEach(button=>{
            button.classList.remove("active");
        });

        btn.classList.add("active");

        const filter = btn.dataset.filter;

        portfolioItems.forEach(item=>{

            if(filter==="all" || item.dataset.filter===filter){

                item.classList.remove("hide");

            }else{

                item.classList.add("hide");

            }

        });

    });

});




const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".view-image").forEach(icon => {

    icon.onclick = function () {

        const img = this.closest(".portfolio-item").querySelector("img");

        lightboxImg.src = img.getAttribute("src");

        lightbox.style.display = "flex";
    };

});

closeBtn.onclick = function () {

    lightbox.style.display = "none";

};

lightbox.onclick = function(e){

    if(e.target === lightbox){

        lightbox.style.display = "none";

    }

};


const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
