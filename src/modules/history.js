import { sealDelete } from "../services/seal-delete"
import { formatTime } from "../utils/format"

export function loadHistory({ id, appointmentHistory }) {
    const total = document.querySelector(".content .history .header span")
    total.textContent = `${appointmentHistory.length} ${appointmentHistory.length === 1 
        ? "corte" 
        : "cortes"}`

    const list = document.querySelector(".content .history .list")
    list.innerHTML = ""
    
    for (let item of appointmentHistory) {
        const date = document.createElement("strong")
        date.textContent = item.date

        const time = document.createElement("span")
        time.textContent = formatTime(item.time)
        
        const title = document.createElement("div")
        title.append(date, time)

        const seal = document.createElement("img")
        seal.classList.add("seal-view")
        seal.setAttribute("src", "./src/assets/icons/seal-check.svg")

        const sealDelete = document.createElement("img")
        sealDelete.classList.add("seal-delete")
        sealDelete.setAttribute("src", "./src/assets/icons/seal-delete.svg")

        const li = document.createElement("li")
        li.dataset.date = item.date
        li.dataset.time = item.time
        li.append(title, seal, sealDelete)

        list.appendChild(li)
    }

    list.onclick = async function(event) {
        if (event.target.classList.contains("seal-delete")) {
            const isConfirm = confirm("Tem certeza que deseja excluir o selo?")

            if (isConfirm) {
                const item = event.target.closest("li")
                const { date, time } = item.dataset

                await sealDelete({
                    id,
                    date,
                    time
                })
            }
        }
    }
}