/* PERSONAL WEBSITE
================================================================== */

console.log('Welcome to my site :)')

// const header = document.querySelector("header");
// window.addEventListener ("scroll",function(){
//     header.classList.toggle("sticky",window.scrollY > 100);
// });


// MENU FUNCTIONALITY
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');

};

menu.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};




// ACTIVE LINKS
(() => {
    if (document.querySelector('.navlist')) {
        let navLinks = document.querySelectorAll('.navlist li a')
        let sections = document.querySelectorAll('section')

        for (let i = 0; i < navLinks.length; i++) {
            let thisLink = navLinks[i];
            thisLink.addEventListener('click', () => {
                if (document.querySelector('.navlist li a.active')) {
                    document.querySelector('.navlist li a.active').classList.remove('active')
                }
                thisLink.classList.add('active')

                // NEW STARTING HERE
                if (document.querySelector('.bx').classList.contains('bx-x')) {
                    document.querySelector('.bx').classList.remove('bx-x')
                }
           
                document.querySelector('.navlist').classList.remove('open')
                // NEW ENDING HERE
            })
        }

        window.addEventListener('scroll', () => {
            let current = ''
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.pageYOffset >= (sectionTop - sectionHeight / 2)) {
                    current = section.getAttribute('id')
                }
            })
            
            navLinks.forEach(navLink => {
                navLink.classList.remove('active')
                if (navLink.classList.contains(`link-${current}`)) {
                    navLink.classList.add('active')
                }
                
            })
        })

    }
})();





// PROJECT DETAILS

(() => {
    if (document.querySelector('.project')) {
        let projects = document.querySelectorAll('.project')

        for (let i = 0; i < projects.length; i++) {
            let project = projects[i];
            let projectLink = project.querySelector('.thumbnail-overlay a')
            let closeProject = project.querySelector('.close-detail')


            closeProject.addEventListener('click', () => {
                project.classList.remove('project-active')
                document.body.classList.remove('overlay-open')
            })

            projectLink.addEventListener('click', e => {
                //e.preventDefault()

                if (document.querySelector('.project.project-active')) {
                    document.querySelector('.project.project-active').classList.remove('project-active')
                }
                project.classList.add('project-active')
                document.body.classList.add('overlay-open')

                let detailImages = project.querySelector('.detail-images')

                detailImages.addEventListener('wheel', e => {
                    e.preventDefault();
                    detailImages.scrollLeft += e.deltaY;
                });
            })

        }
    }
})();




// EVERYTHING BELOW THIS IS NEW

// PROJECT THUMBNAIL BACKGROUND BLUR
(function() {
    if (document.querySelector('.project .thumbnail')) {
        let thumbs = document.querySelectorAll('.project .thumbnail')

        for (let i = 0; i < thumbs.length; i++) {
            let thumb = thumbs[i]
            let thumbImg = thumb.querySelector('img').getAttribute('src')
            console.log(thumbImg)
            thumb.setAttribute('style', `background-image: url(${thumbImg})`)
        }
    }
})();