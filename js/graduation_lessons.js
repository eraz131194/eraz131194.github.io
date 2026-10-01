//#region Calculates approximate price
function calculatePrice() {

    const hourInput    = document.getElementById( 'schoolHours' )
    const price        = document.getElementById( 'totalPrice' )
    const discountNote = document.getElementById( 'discountNote' )

    const hours = parseInt( hourInput.value ) || 0
    
    let rate     = 35
    let discount = 1

    if ( hours >= 30 ) {

        discount = 0.80
        discountNote.innerHTML = '<span class="text-success fw-bold">Intenzivni paket: -20 % popusta!</span>'
    }
    else if ( hours >= 15 ) {

        discount = 0.90
        discountNote.innerHTML = '<span class="text-success fw-bold">Standardni paket: -10 % popusta!</span>'
    }
    else {

        discountNote.innerText = 'Preporučamo minimalno 10 sati za kvalitetnu pripremu i obradu eseja.'
    }

    const total = hours * rate * discount

    price.innerText = total.toLocaleString( 'hr-HR', {
        style    : 'currency',
        currency : 'EUR'
    } )
}

document.getElementById( 'schoolHours' )?.addEventListener( 'input', calculatePrice )
//#endregion