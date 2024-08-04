export function loadProgress({ loyaltyCard }) {
    const remaining = document.getElementById("remaining")
    remaining.innerHTML = `<span>${loyaltyCard.cutsRemaining}</span> ${loyaltyCard.cutsRemaining === 1 
                            ? 'corte restante' 
                            : 'cortes restantes'}`

    const progressValue = (loyaltyCard.totalCuts / loyaltyCard.cutsNeeded) * 100

    var root = document.querySelector(':root');
    root.style.setProperty('--progress', `${progressValue}%`)
    
    const barTotal = document.getElementById("bar-total")
    barTotal.textContent = `${loyaltyCard.totalCuts} de ${loyaltyCard.cutsNeeded}`
}