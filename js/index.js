//#region Changes hero image based on the time of  the year
function applySeasonalTheme() {

    const month = new Date().getMonth()
    const root  = document.documentElement
    root.style.setProperty( '--hero-url', "url( '../assets/images/hero/summer.jpg' )" )
    // if ( month === 11 || month <= 1 )
    //     root.style.setProperty( '--hero-url', "url( '../assets/images/hero/winter.jpg' )" )
    // else if ( month >= 2 && month <= 4 )
    //     root.style.setProperty( '--hero-url', "url( '../assets/images/hero/spring.jpg' )" )
    // else if ( month >= 5 && month <= 7 )
    //     root.style.setProperty( '--hero-url', "url( '../assets/images/hero/summer.jpg' )" )
    // else
    //     root.style.setProperty( '--hero-url', "url( '../assets/images/hero/autumn.jpg' )" )
}

applySeasonalTheme()
//#endregion