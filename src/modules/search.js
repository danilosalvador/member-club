import { load } from "./load"

const form = document.querySelector("form")
const card = document.getElementById("id")

card.oninput = () => {
    let value = card.value
        .replace(/\D/g, "")
        .replace(/(\d{3})(\d)/, "$1-$2")
        .replace(/(\d{3})(\d)/, "$1-$2")
        .replace(/(\d{3})(\d)/, "$1-$2")
        .replace(/(-\d{3})\d+?$/, "$1")

    card.value = value
}

form.onsubmit = (event) => {
    event.preventDefault()
    
    const id = card.value.trim()

    if (!id) {
        alert("Informe um ID do cartão")
        return
    }

    if (id.length !== 15) {
        alert("ID do cartão inválido")
        return
    }

    load({ id })

    card.value = ""
}
