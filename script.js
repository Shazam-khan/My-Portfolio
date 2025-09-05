

// Make entire pages clickable for navigation (but not buttons)
const rightPages = document.querySelectorAll('.book-page.page-right');

rightPages.forEach((page, index) => {
    page.onclick = (e) => {
        // Don't flip if clicking on buttons, links, or form elements
        if (e.target.tagName === 'BUTTON' || 
            e.target.tagName === 'A' || 
            e.target.tagName === 'INPUT' || 
            e.target.tagName === 'TEXTAREA' ||
            e.target.closest('.btn') ||
            e.target.closest('a') ||
            e.target.closest('form')) {
            return;
        }

        const pageTurnId = page.getAttribute('id');
        const pageTurn = document.getElementById(pageTurnId);

        if(pageTurn.classList.contains('turn')){
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 2 - index;
            }, 500);
        } else {
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 2 + index;
            }, 500);
        }
    }
});


// contact me button when click - flip pages to Latest Project page
const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.btn.contact-me');

contactMeBtn.onclick = () => {
    // Flip through all pages sequentially until reaching Latest Project page (turn-3)
    pages.forEach((page, index) => {
        setTimeout(() => {
            page.classList.add('turn');
            setTimeout(() => {
                page.style.zIndex = 20 + index;
            }, 500);
        }, (index + 1) * 200 + 100);
    });
}


// create reverse index function
let totalPages = pages.length;
let pageNumber = 0;

function reverseIndex() {
    pageNumber--;
    if(pageNumber < 0){
        pageNumber = totalPages - 1;
    }
}


// back profile button when click
const backProfileBtn = document.querySelector('.back-profile');

backProfileBtn.onclick = () => {
    pages.forEach((_, index) => {
        setTimeout(() => {
            reverseIndex();

            pages[pageNumber].classList.remove('turn');

            setTimeout(() => {
                reverseIndex();
                pages[pageNumber].style.zIndex = 10 + index;
            }, 500)
        }, (index + 1) * 200 + 100)

    })
}


// opening animation
const coverRight = document.querySelector('.cover.cover-right');
const wrapper = document.querySelector('.wrapper');
const allPages = document.querySelectorAll('.book-page');

// Initialize all pages as hidden and closed
allPages.forEach((page, index) => {
    page.style.opacity = '0';
    page.classList.remove('turn');
    page.style.zIndex = 2 - index;
});

// Book opening animation sequence
setTimeout(() => {
    // Start cover opening
    coverRight.classList.add('turn');
}, 1500);

setTimeout(() => {
    // Hide cover after opening
    coverRight.style.zIndex = -1;
}, 3200);

// Show pages after book opening animation
setTimeout(() => {
    allPages.forEach((page) => {
        page.style.opacity = '1';
    });
}, 3500);

// Add a subtle book opening effect to the wrapper
setTimeout(() => {
    wrapper.style.transform = 'scale(1.02)';
    setTimeout(() => {
        wrapper.style.transform = 'scale(1)';
    }, 200);
}, 3000); 