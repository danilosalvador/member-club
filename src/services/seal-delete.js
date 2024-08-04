import { load } from "../modules/load";
import { apiConfig } from "./api-config";
import { clientGet } from "./client-get";

export async function sealDelete({ id, date, time }) {
    const client = await clientGet({ id })

    client.appointmentHistory = client.appointmentHistory.filter(item => `${item.date} ${item.time}` !== `${date} ${time}`)

    const total = client.appointmentHistory.length

    client.loyaltyCard.totalCuts = total
    client.loyaltyCard.cutsRemaining = client.loyaltyCard.cutsNeeded - total

    await fetch(`${apiConfig.baseURL}/clients/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(client)
    })

    await load({ id })
}