const footerStyle = document.createElement( 'template' )
footerStyle.innerHTML = `
<style>
footer a {
    color : rgba(255, 255, 255, .55) !important;
}
footer a:hover {
    color      : white!important;
    transition : 0.3s ease;
}
footer img {
    filter : brightness(0) invert(1);
}
</style>`

const footerHtml = document.createElement( 'template' )
footerHtml.innerHTML = `
<footer class="bg-accent-deep fc-white pt-5 pb-4" data-navbar="dark">
    <div class="container text-center text-md-start">
        <div class="row text-center text-md-start">

            <a class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3 text-decoration-none" href="index.html#hero">
                <h5 class="text-uppercase mb-2 fw-bold gap-2 align-items-center fc-white">
                    <img src="./assets/images/logo.svg" alt="Logo" width="30" height="30" class="brand-logo">
                    Kroatus
                </h5>
                <p class="fc-white-light">Mjesto gdje je hrvatski važan.</p>
            </a>

            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h5 class="text-uppercase mb-2 fw-bold">Usluge</h5>
                <p><a href="proofreading.html" class="text-decoration-none small">Lektura</a></p>
                <p><a href="school_lessons.html" class="text-decoration-none small">Instrukcije</a></p>
                <p><a href="graduation_lessons.html" class="text-decoration-none small">Pripreme za maturu</a></p>
                <!--<p><a href="translation.html" class="text-decoration-none small">Prijevod</a></p>-->
            </div>

            <!--<div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h5 class="text-uppercase mb-2 fw-bold">Materijali</h5>
                <p><a href="#" class="text-decoration-none small">Lektire</a></p>
                <p><a href="#" class="text-decoration-none small">Pravopis</a></p>
                <p><a href="#" class="text-decoration-none small">Gramatika</a></p>
            </div>-->

            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h5 class="text-uppercase mb-2 fw-bold">Kontakt</h5>
                <p><a href="mailto:kroatus@gmail.com" class="text-decoration-none small"><i class="bi bi-envelope-fill me-2"></i> kroatus@gmail.com</a></p>
                <p><a href="tel:+385986863026" class="text-decoration-none small"><i class="bi bi-telephone-fill me-2"></i> +385 98 686 3026</a></p>
            </div>
        </div>

        <hr class="mb-4">

        <div class="row align-items-center fc-white-light">
            <div class="col-md-7 col-lg-8">
                <p class="small">Autor &copy; <label id="currYear"></label> <strong>Kroatus obrt</strong> Sva prava zadržana.</p>
            </div>

            <div class="col-md-5 col-lg-4">
                <div class="text-center text-md-end">
                    <ul class="list-unstyled list-inline">
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
</footer>
`

class Footer extends HTMLElement {

    connectedCallback() {

        this.appendChild( footerStyle.content.cloneNode( true ) )
        this.appendChild( footerHtml.content.cloneNode( true ) )
    }
}

customElements.define( 'section-footer', Footer )