//#region This adds current year everywhere on page
document.addEventListener( 'DOMContentLoaded', function() {

    const labels = document.querySelectorAll( '#currYear' )

    const currentYear = new Date().getFullYear()

    labels.forEach( _label => {

        _label.innerHTML = currentYear
    } )
} )
//#endregion

//#region Changes look & feel of website depending on time of the year
function applySeasonalTheme() {

    const month = new Date().getMonth()
    const root  = document.documentElement

    const themes = {
        winter : { bg : '#F0F8FF', text : '#001E30', accent : '#0077BE', accent_dark : '#005FA3', accent_deep : '#004A80' },
        spring : { bg : '#F1F8E9', text : '#111B0A', accent : '#558B2F', accent_dark : '#416924', accent_deep : '#34541D' },
        summer : { bg : '#FFFDE7', text : '#2E2408', accent : '#FBC02D', accent_dark : '#DFAC29', accent_deep : '#AD8727' },
        autumn : { bg : '#FFF3E0', text : '#2B0F00', accent : '#E65100', accent_dark : '#C94802', accent_deep : '#8F3301' } 
    }

    let selectedTheme = themes.summer

    // if ( month === 11 || month <= 1 )
    //     selectedTheme = themes.winter
    // else if ( month >= 2 && month <= 4 )
    //     selectedTheme = themes.spring
    // else if ( month >= 5 && month <= 7 )
    //     selectedTheme = themes.summer
    // else
    //     selectedTheme = themes.autumn

    root.style.setProperty( '--color-bg',          selectedTheme.bg )
    root.style.setProperty( '--color-text',        selectedTheme.text )
    root.style.setProperty( '--color-accent',      selectedTheme.accent )
    root.style.setProperty( '--color-accent-dark', selectedTheme.accent_dark )
    root.style.setProperty( '--color-accent-deep', selectedTheme.accent_deep )
}

applySeasonalTheme()
//#endregion