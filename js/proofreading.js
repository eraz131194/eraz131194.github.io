//#region Calculates approximate price
function calculatePrice() {
    
    const wordCount   = document.getElementById( 'wordCount' )
    const totalPrice  = document.getElementById( 'totalPrice' )
    const serviceType = document.getElementById( 'serviceType' )

    const words = parseInt( wordCount.value ) || 0
    const cards = words / 1800
    
    let cardRate = 2

    if ( serviceType.value === 'graduation' )   cardRate = 2
    if ( serviceType.value === 'bachelor' )     cardRate = 2.45
    if ( serviceType.value === 'master' )       cardRate = 2.45
    if ( serviceType.value === 'professional' ) cardRate = 2.45
    if ( serviceType.value === 'scientific' )   cardRate = 2.6
    if ( serviceType.value === 'phd' )          cardRate = 3
    if ( serviceType.value === 'article' )      cardRate = 20
    if ( serviceType.value === 'flyer' )        cardRate = 15
    if ( serviceType.value === 'website' )      cardRate = 30
    if ( serviceType.value === 'business' )     cardRate = 75
    if ( serviceType.value === 'book' )         cardRate = 3
    if ( serviceType.value === 'other' )        cardRate = 3

    const total = cards * cardRate

    totalPrice.innerText = total.toLocaleString( 'hr-HR', {
        style    : 'currency',
        currency : 'EUR'
    } )
}

document.getElementById( 'wordCount' )?.addEventListener( 'input', calculatePrice )
document.getElementById( 'serviceType' )?.addEventListener( 'change', calculatePrice )
//#endregion