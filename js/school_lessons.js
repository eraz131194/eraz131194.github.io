//#region Calculates approximate price
function calculatePrice() {
    
    const hourInput    = document.getElementById( 'schoolHours' )
    const studentType  = document.getElementById( 'studentType' )
    const price        = document.getElementById( 'totalPrice' )
    const discountNote = document.getElementById( 'schoolDiscountNote' )

    const hours = parseInt( hourInput.value ) || 0

    let rate = 15
    if ( studentType.value === 'elementary1' ) rate = 15
    if ( studentType.value === 'elementary2' ) rate = 15
    if ( studentType.value === 'elementary3' ) rate = 15
    if ( studentType.value === 'elementary4' ) rate = 15
    if ( studentType.value === 'elementary5' ) rate = 15
    if ( studentType.value === 'elementary6' ) rate = 15
    if ( studentType.value === 'elementary7' ) rate = 15
    if ( studentType.value === 'elementary8' ) rate = 15
    if ( studentType.value === 'high1' )       rate = 18
    if ( studentType.value === 'high2' )       rate = 18
    if ( studentType.value === 'high3' )       rate = 18
    if ( studentType.value === 'high4' )       rate = 18

    let discount = 1

    if ( hours >= 10 ) {

        discount = 0.90
        discountNote.innerHTML = '<span class="text-success fw-bold">Bravo! Paket od 10+ sati osigurava 10 % popusta.</span>'
    }
    else {

        discountNote.innerText = '*Popust se obračunava na pakete od 10+ sati.'
    }

    const total = hours * rate * discount

    price.innerText = total.toLocaleString( 'hr-HR', {
        style    : 'currency',
        currency : 'EUR'
    } )
}

document.getElementById( 'schoolHours' )?.addEventListener( 'input', calculatePrice )
document.getElementById( 'studentType' )?.addEventListener( 'change', calculatePrice )
//#endregion