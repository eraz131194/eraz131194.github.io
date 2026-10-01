const navbarStyle = document.createElement( 'template' )
navbarStyle.innerHTML = `
<style>
.navbar {
    min-height : 56px;
}
.navbar-blur {
    background              : rgba(0, 0, 0, 0.35);
    backdrop-filter         : blur(10px);
    -webkit-backdrop-filter : blur(10px);
}

.navbar-dark.bg-dark {
    background-color : transparent !important;
}

.navbar,
.nav-link,
.navbar-brand,
.brand-logo,
.navbar-toggler i {
    transition : color 0.3s ease, filter 0.3s ease, background-color 0.3s ease;
}

.navbar-toggler {
    border  : none;
    padding : 0.25rem .5rem;
}
.navbar-toggler:focus {
    box-shadow : none;
}
.navbar-toggler i {
    color     : rgba(255, 255, 255, .55);
    font-size : 1.5rem;
}

.navbar-light-text {
    color : rgba(0, 0, 0, 0.35)!important;
}
.navbar-light-text .nav-link,
.navbar-light-text .navbar-toggler i {
    color : rgba(0, 0, 0, 0.35)!important;
}
.navbar-light-text .navbar-brand,
.navbar-light-text .nav-link:hover,
.navbar-light-text .nav-link.active {
    color : black!important;
}
.navbar-light-text .brand-logo {
    filter :  brightness(0);
}

.navbar-dark-text {
    color : rgba(255, 255, 255, .55) !important;
}
.navbar-dark-text .nav-link,
.navbar-dark-text .navbar-toggler i {
    color : rgba(255, 255, 255, .55) !important;
}
.navbar-dark-text .navbar-brand,
.navbar-dark-text .nav-link:hover,
.navbar-dark-text .nav-link.active {
    color : white!important;
}
.navbar-dark-text .brand-logo {
    filter : brightness(0) invert(1);
}

.offcanvas.show,
.offcanvas.show .nav-link {
    color : rgba(255, 255, 255, .55) !important;
}
.offcanvas.show .offcanvas-title {
    color : white!important;
}
.offcanvas.show .brand-logo {
    filter : brightness(0) invert(1);
}

.offcanvas {
    height : 100vh !important;
}

.dropdown-item {
    color: rgba(255, 255, 255, 0.8);
    transition: all 0.2s ease;
}

.dropdown-item:hover,
.dropdown-item:active,
.dropdown-item:focus {
    background: rgba(255, 255, 255, 0.1) !important;
    color: #fff !important;
}

.dropdown-item i {
    font-size: 1.4rem;
    width: 25px;
    text-align: center;
}

.dropdown-toggle::after {
    vertical-align: middle;
    margin-left: 0.5rem;
    transition: transform 0.3s ease;
}

.nav-item.dropdown .dropdown-toggle.show::after,
.nav-item.dropdown .dropdown-toggle.is-open::after {
    transform : rotate(180deg);
}

.navbar-footer a {
    color : rgba(255, 255, 255, .55) !important;
}
.navbar-footer a:hover {
    color      : white!important;
    transition : 0.3s ease;
}

@media (min-width: 992px) {
    .navbar-expand-lg .offcanvas {
        visibility : visible !important;
        transform  : none !important;
        background : transparent !important;
        display    : flex !important;
        position   : static !important;
        height     : auto !important;
        width      : auto !important;
    }

    .navbar-expand-lg .offcanvas-body {
        display : flex !important;
        padding : 0 !important;
    }

    .dropdown-menu {
        background              : rgba(20, 20, 20, 0.8) !important;
        backdrop-filter         : blur(15px);
        -webkit-backdrop-filter : blur(15px);
        box-shadow              : 0 10px 30px rgba(0,0,0,0.5) !important;
        border-radius           : 15px;
        padding                 : 1rem;
        border                  : 1px solid rgba(255, 255, 255, 0.1) !important;
        
        display                 : block;
        opacity                 : 0;
        visibility              : hidden;
        transform               : translateY(10px);
        transition              : all 0.3s ease;
    }

    .nav-item.dropdown:hover .dropdown-menu {
        opacity    : 1;
        visibility : visible;
        transform  : translateY(0);
    }

    .nav-item.dropdown:hover .dropdown-toggle::after {
        transform : rotate(180deg);
    }
}

@media (max-width: 991px) {
    .offcanvas {
        height           : 100vh !important;
        background-color : var(--color-accent-deep) !important;
    }
    .offcanvas .nav-link {
        color : rgba(255, 255, 255, 0.75) !important;
    }
    .offcanvas .nav-link:hover, .offcanvas .nav-link.active {
        color : white !important;
    }
    
    .dropdown-menu {
        background: transparent !important;
        border: none !important;
        padding-left: 1.5rem; /* Indent sub-items */
    }
    
    .dropdown-item {
        margin-bottom: 0.5rem;
        border-radius: 10px;
    }

    .offcanvas-body .dropdown-menu {
        background              : transparent !important;
        backdrop-filter         : none !important;
        -webkit-backdrop-filter : none !important;
        box-shadow              : none !important;
        
        border                  : none !important;
        padding-left            : 1rem;
        margin-top              : 0 !important;
        opacity                 : 1 !important;
        visibility              : visible !important;
        transform               : none !important;
        position                : static !important;
    }

    .offcanvas-body .dropdown-item {
        padding       : 0.75rem 1rem;
        border-radius : 8px;
        color         : rgba(255, 255, 255, 0.8) !important;
    }

    .offcanvas-body .dropdown-item:hover {
        background : rgba(255, 255, 255, 0.1) !important;
    }
    
    .offcanvas-body .dropdown-divider {
        border-top : 1px solid rgba(255, 255, 255, 0.1);
    }
}
</style>`

const navbarHtml = document.createElement( 'template' )
navbarHtml.innerHTML = `
<nav class="navbar navbar-expand-lg navbar-dark navbar-blur bg-dark sticky-top navbar-dark-text">
    <div class="container d-flex align-items-center">

        <a class="navbar-brand fw-bold text-uppercase d-flex gap-2 align-items-center" href="index.html#hero">
            <img src="./assets/images/logo.svg" alt="Logo" width="30" height="30" class="brand-logo">
            Kroatus
        </a>

        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <i class="bi bi-list"></i>
        </button>

        <div class="offcanvas offcanvas-start text-bg-dark navbar-blur" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title text-uppercase fw-bold d-flex gap-2" id="offcanvasNavbarLabel">
                    <img src="./assets/images/logo.svg" alt="Logo" width="30" height="30" class="brand-logo">
                    Kroatus
                </h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body d-flex flex-column">

                <ul class="navbar-nav justify-content-start justify-content-md-center flex-grow-1 pe-3">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="index.html#hero">Početna</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#services" id="servicesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Usluge
                        </a>
                        <ul class="dropdown-menu dropdown-menu-dark navbar-blur border-0 shadow-lg" aria-labelledby="servicesDropdown">
                            <li>
                                <a class="dropdown-item d-flex align-items-center gap-3 py-2 round" href="proofreading.html">
                                    <i class="bi bi-spellcheck fc-white"></i>
                                    <div>
                                        <span class="d-block fw-bold">Lektura</span>
                                        <small class="opacity-75">Vi pišete. Mi usavršavamo.</small>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item d-flex align-items-center gap-3 py-2 round" href="school_lessons.html">
                                    <i class="bi bi-book fc-white"></i>
                                    <div>
                                        <span class="d-block fw-bold">Instrukcije</span>
                                        <small class="opacity-75">Jasno. Točno. Hrvatski.</small>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item d-flex align-items-center gap-3 py-2 round" href="graduation_lessons.html">
                                    <i class="bi bi-mortarboard fc-white"></i>
                                    <div>
                                        <span class="d-block fw-bold">Pripreme za maturu</span>
                                        <small class="opacity-75">Uspjeh počinje dobrom pripremom.</small>
                                    </div>
                                </a>
                            </li>
                            <!--<li><hr class="dropdown-divider opacity-25"></li>
                            <li>
                                <a class="dropdown-item d-flex align-items-center gap-3 py-2 round" href="translation.html">
                                    <i class="bi bi-translate fc-white"></i>
                                    <div>
                                        <span class="d-block fw-bold">Prijevod</span>
                                        <small class="opacity-75">Vaše riječi bez izgubljenoga značenja.</small>
                                    </div>
                                </a>
                            </li>-->
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="about.html">O nama</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="contact.html">Kontakt</a>
                    </li>
                </ul>

                <div class="navbar-footer mt-auto d-lg-none">

                    <hr class="mb-4 opacity-50">

                    <div class="row align-items-center fc-white-light">

                        <div class="col-12 text-center text-md-start">
                            <p class="small mb-2">Autor &copy; <label id="currYear"></label> <strong>Kroatus obrt</strong></p>
                            <p class="x-small opacity-75">Sva prava zadržana.</p>
                        </div>

                        <div class="col-12 text-center text-md-end">
                            <ul class="list-unstyled list-inline mb-0">
                                <li class="list-inline-item">
                                    <a href="#" class="btn-floating btn-sm" style="font-size: 23px;"><i class="bi bi-facebook"></i></a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="#" class="btn-floating btn-sm" style="font-size: 23px;"><i class="bi bi-instagram"></i></a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="#" class="btn-floating btn-sm" style="font-size: 23px;"><i class="bi bi-linkedin"></i></a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="#" class="btn-floating btn-sm" style="font-size: 23px;"><i class="bi bi-youtube"></i></a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </div>
</nav>
`
class Navbar extends HTMLElement {

    connectedCallback() {

        this.appendChild( navbarStyle.content.cloneNode( true ) )
        this.appendChild( navbarHtml.content.cloneNode( true ) )

        this.#handleMenuClick()
        this.#handleScroll()
    }

    // When user clicks on mobile menu this closes the menu and waits to scroll down
    #handleMenuClick() {
    
        const offcanvasElement = this.querySelector( '#offcanvasNavbar' )
        if ( !offcanvasElement ) return

        const bsOffcanvas = bootstrap.Offcanvas.getInstance( offcanvasElement ) || new bootstrap.Offcanvas( offcanvasElement )
        const menuLinks   = offcanvasElement.querySelectorAll( '.nav-link, .dropdown-item' )

        menuLinks.forEach( _link => {

            _link.addEventListener( 'click', function ( _e ) {

                if ( this.classList.contains( 'dropdown-toggle' ) ) return

                const href = this.getAttribute( 'href' )
                if ( !href ) return

                // Determine if this link is an in-page anchor on the current page
                const hashIndex   = href.indexOf( '#' )
                const hasHash     = hashIndex !== -1
                const hash        = hasHash ? href.substring( hashIndex ) : null
                const targetPage  = hasHash ? href.substring( 0, hashIndex ) : href
                const currentPage = window.location.pathname.split( '/' ).pop() || 'index.html'

                const isCurrentPage = targetPage === '' || targetPage === currentPage || ( currentPage === '' && targetPage === 'index.html' )
                const targetSection = ( isCurrentPage && hash ) ? document.querySelector( hash ) : null

                if ( window.innerWidth < 992 ) {

                    if ( targetSection ) {
                        // In-page anchor on the current page: prevent instant jump & smooth scroll after closing menu
                        _e.preventDefault()

                        menuLinks.forEach( l => l.classList.remove( 'active' ) )
                        this.classList.add( 'active' )

                        bsOffcanvas.hide()

                        offcanvasElement.addEventListener( 'hidden.bs.offcanvas', () => {
                            const navHeight      = document.querySelector( '.navbar' )?.offsetHeight || 56
                            const targetPosition = targetSection.offsetTop - navHeight

                            window.scrollTo( {
                                top      : targetPosition,
                                behavior : 'smooth'
                            } )
                        }, { once : true } )
                    } else {
                        // External page navigation (about.html, contact.html, etc.): allow natural page redirect
                        bsOffcanvas.hide()
                    }
                }
            } )
        } )
    }

    // Changes menu text color depending on the scroll position and active nav-link
    #handleScroll() {
        
        const nav      = document.querySelector( 'nav.navbar' )
        const navLinks = document.querySelectorAll( '.nav-link' )
        
        const observer = new IntersectionObserver( ( _entries ) => {
            
            _entries.forEach( _entry => {

                if ( _entry.isIntersecting === false ) return
                
                const id    = _entry.target.getAttribute( 'id' )
                const theme = _entry.target.getAttribute( 'data-navbar' )

                if ( theme === 'light' ) {

                    nav.classList.add( 'navbar-light-text' )
                    nav.classList.remove( 'navbar-dark-text' )
                }
                else {

                    nav.classList.add( 'navbar-dark-text' )
                    nav.classList.remove( 'navbar-light-text' )
                }

                navLinks.forEach( _link => {
                    
                    _link.classList.remove( 'active' )

                    if ( _link.getAttribute( 'href' ) !== `#${id}`) return
                    
                    _link.classList.add( 'active' )
                } )
            } )
        }, { rootMargin : '-56px 0px -90% 0px', threshold : 0 } )

        const sections = document.querySelectorAll( '[data-navbar]' )
        sections.forEach( _section => observer.observe( _section ) )
    }
}

customElements.define( 'nav-bar', Navbar )