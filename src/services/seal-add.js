import dayjs from "dayjs";
import { clientGet } from "./client-get";
import { apiConfig } from "./api-config";
import { load } from "../modules/load";

export async function sealAdd({ id }) {
    const client = await clientGet({ id })
    
    const now = dayjs(new Date())
   
    client.appointmentHistory.unshift({
        date: now.format("DD/MM/YYYY"),
        time: now.format("HH:mm:ss"),
    });

    client.loyaltyCard.totalCuts++
    client.loyaltyCard.cutsRemaining--

    await fetch(`${apiConfig.baseURL}/clients/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(client)
    })

    load({ id })
}
