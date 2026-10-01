//#region Calculates approximate price
function calculatePrice() {
    
    const charInput  = document.getElementById( 'charCount' )
    const typeSelect = document.getElementById( 'translationType' )
    const price      = document.getElementById( 'totalTranslationPrice' )
    const cardInfo   = document.getElementById( 'cardCountInfo' )

    const chars        = parseInt( charInput.value ) || 0
    const charsPerPage = 1500;
    const pages        = chars / charsPerPage

    cardInfo.innerText = `Broj prevoditeljskih kartica: ${pages.toFixed(2)}`

    let ratePerPage = 18
    if ( typeSelect.value === 'general' )   ratePerPage = 18
    if ( typeSelect.value === 'technical' ) ratePerPage = 25
    if ( typeSelect.value === 'literary' )  ratePerPage = 22

    const total = pages * ratePerPage

    const finalTotal = ( total > 0 && total < ratePerPage )? ratePerPage : total

    price.innerText = finalTotal.toLocaleString( 'hr-HR', {
        style    : 'currency',
        currency : 'EUR'
    } )
}

document.getElementById( 'charCount' )?.addEventListener( 'input', calculatePrice )
document.getElementById( 'translationType' )?.addEventListener( 'change', calculatePrice )
//#endregion