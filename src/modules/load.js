import { clientGet } from "../services/client-get"
import { loadUser } from "./user"
import { loadHistory } from "./history"
import { loadCard } from "./card"
import { loadProgress } from "./progress"

export async function load({ id }) {
    try {
        const data = await clientGet({ id })

        if (!data) {
            alert("Usuário não encontrado.")
            return
        }

        loadUser({
            id: data.id,
            name: data.name,
            clientSince: data.clientSince,
        })

        loadHistory({
            id: data.id,
            appointmentHistory: data.appointmentHistory,
        })

        loadCard({
            id: data.id,
            loyaltyCard: data.loyaltyCard,
        })

        loadProgress({
            loyaltyCard: data.loyaltyCard,
        })
    } catch (error) {
        console.log(error)
        alert("Ocorreu um erro ao tentar pesquisar o ID do cartão.")
    }
}
