import { sealAdd } from "../services/seal-add"

export function loadCard({ id, loyaltyCard }) {
    const cardId = document.getElementById("card-id")
    cardId.textContent = `ID: ${id}`

    const slots = document.querySelector(".card .slots")
    slots.innerHTML = ""

    for (let currentCut = 1; currentCut <= loyaltyCard.cutsNeeded; currentCut++) {
        let seal = undefined

        if (currentCut <= loyaltyCard.totalCuts) {
            seal = document.createElement("img")

            seal.classList.add("slot")
            seal.setAttribute("src", "./src/assets/pin-check.png")
        } else if (currentCut === loyaltyCard.cutsNeeded) {
            seal = document.createElement("img")

            seal.classList.add("slot")
            seal.classList.add("add")
            seal.classList.add("last")
            seal.setAttribute("src", "./src/assets/icons/gift-solid.svg")
        } else {
            seal = document.createElement("div")
            
            seal.classList.add("slot")
            seal.classList.add("add")
        }

        slots.append(seal)
    }

    slots.onclick = function(event) {
        if (event.target.classList.contains("add")) {
            sealAdd({ id })
        }
        if (event.target.classList.contains("last") && loyaltyCard.cutsRemaining === 1) { 
            const completed = document.getElementById("completed")
            completed.onclick = function() {
                completed.close()
            }
            completed.showModal()
        }
    }
}