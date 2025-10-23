// Show or hide the mobile menu
toggleMobileMenu = (showMenu) => {
    // We need to pass DOM elements or NodeList objects to animejs
    const menuDomEl = document.querySelector('header#main-header nav.mobile-nav');
    const linkDomEls = document.querySelectorAll('header#main-header nav.mobile-nav a');

    anime
        .timeline({
            duration: 500,
            easing: showMenu ? 'easeOutExpo' : 'easeInExpo',
            direction: showMenu ? 'normal' : 'reverse',
            begin: () => anime.set(menuDomEl, { display: 'flex' }),
            complete: () => anime.set(menuDomEl, { display: showMenu ? 'flex' : 'none' }),
        })
        .add({
            targets: menuDomEl,
            opacity: [0, 1],
        })
        .add(
            {
                targets: linkDomEls,
                opacity: [0, 1],
                translateX: [-50, 0],
                delay: anime.stagger(30),
            },
            '-=300',
        );
}

$('#main-header button.hamburger').on('click', () => toggleMobileMenu(true));
$('#main-header .mobile-nav button.close').on('click', () => toggleMobileMenu(false));
