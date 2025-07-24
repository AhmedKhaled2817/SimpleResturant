/*===============TOGGLE BUTTON =============== */
const hamburger=document.getElementById('hamburger');
const navMenu=document.getElementById('navMenu');
const navClose=document.getElementById('navClose');
const navLink=document.querySelectorAll('.nav-link');


hamburger.addEventListener('click',()=>{
    navMenu.classList.remove('hidden');
});

navClose.addEventListener('click',()=>{
    navMenu.classList.add('hidden');
});

navLink.forEach((link)=>{
    link.addEventListener('click',()=>{
        navMenu.classList.add('hidden');
    })
})

/*===============TABS ===============*/
const tabs=document.querySelectorAll('.tabs__wrap ul li');

const all =document.querySelectorAll('.item__wrap');

const foods =document.querySelectorAll('.food');

const snacks =document.querySelectorAll('.snacks');

const  beverages =document.querySelectorAll('.beverage');


tabs.forEach((tab)=>{
    tab.addEventListener('click',()=>{
        tabs.forEach((tab)=>{
            tab.classList.remove('active');
        })
        tab.classList.add('active');

        const tabValue=tab.getAttribute('data-tabs');

        all.forEach((item)=>{
            item.style.display='none';
        })

        if(tabValue=='food'){
            foods.forEach((item)=>{
                item.style.display='block';
            });
        } 
        else if(tabValue=='snacks'){
            snacks.forEach((item)=>{
                item.style.display='block';
            });
        }
        else if (tabValue=='beverages'){
            beverages.forEach((item)=>{
                item.style.display='block';
            });
        }
        else{
            all.forEach((item)=>{
                item.style.display='block';
            })
        }

    })
})

/*=============== Swiper JS ===============*/
let swiper = new Swiper(".swiper", {
  // Optional parameters
    loop: true,
    speed:400,
    spaceBetween: 30,
    grabCursor: true,
    autoplay:{
        dealy:3000,
        disableOnInteraction:false,
    },
    pagination:{
        el:".swiper-pagination",
        dynamicBullets:true,
        clickable:true,
    },
    breakpoints:{
        // when window width is >=640
        640:{
            slidesPerView:1,
        },
        
        // when window width is >=640
        768:{
            slidesPerView:2,
        },
        
        // when window width is >=640
        1024:{
            slidesPerView:3,
        },


    },
});


/*=============== DARK LIGHT THEME ===============*/
const html = document.querySelector("html");
const themeBtn = document.getElementById('theme-toggle');

if (localStorage.getItem('mode') === 'dark') {
    darkMode();
} else {
    lightMode();
}

themeBtn.addEventListener('click', (e) => {
    if (localStorage.getItem('mode') === 'light') {
        darkMode();
    } else {
        lightMode();
    }
});

function darkMode() {
    html.classList.add('dark');
    themeBtn.classList.replace('ri-moon-line', 'ri-sun-line');
    localStorage.setItem('mode', 'dark');
}

function lightMode() {
    html.classList.remove('dark');
    themeBtn.classList.replace('ri-sun-line', 'ri-moon-line');
    localStorage.setItem('mode', 'light');
}



/*=============== SHOW SCROLL UP ===============*/

const srcollUp=()=>{
    const srcollUp=document.getElementById('srcollUp');

    if (this.scrollY>=350){
        srcollUp.classList.remove('-bottom-1/2');
        srcollUp.classList.add('bottom-4')
    } else{
        srcollUp.classList.remove('bottom-4');
        srcollUp.classList.add('-bottom-1/2');
    }

}

window.addEventListener('scroll',srcollUp);

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader=()=>{
    const header=document.getElementById('header');

    if (this.scrollY>=50){
        header.classList.add('border-b','border-secondaryColor');
    }
    else{
        header.classList.remove('border-b','border-secondaryColor');
    }

}

window.addEventListener('scroll',scrollHeader);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const activeLink=()=>{
    const sections=document.querySelectorAll('section');
    const  navLinks=document.querySelectorAll('.nav-link');
    
    let current='home';

    sections.forEach((section)=>{
        const sectionTop=section.offsetTop;

        if (window.scrollY >= sectionTop - 60){
            current=section.getAttribute('id');
        }
    })

    navLinks.forEach((item)=>{
        item.classList.remove('text-secondaryColor');

        if (item.href.includes(current)){
            item.classList.add('text-secondaryColor');
        };
    })

}

window.addEventListener('scroll',activeLink);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:400,
    reset: true, // animation repaet
});
sr.reveal(`.home__image`)
sr.reveal(`.content`,{origin:'bottom'});

sr.reveal(`.about__img`,{origin:'bottom'});
sr.reveal(`.about__content`,{origin:'top'});

sr.reveal(`.promo__card-1`,{origin:'left'});
sr.reveal(`.promo__card-2`,{origin:'right'});


sr.reveal(`.menu__items`,{origin:'left'});

sr.reveal(`.customer__review`,{origin:'right'});

sr.reveal(`.footer`);
