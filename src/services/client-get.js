import { apiConfig } from "./api-config";

export async function clientGet({ id }) {
    try {
        const response = await fetch(`${apiConfig.baseURL}/clients?id=${id}`)
        const data = await response.json()

        return data.length === 0 ? undefined : data[0]
    } catch (error) {
        console.log(error)
        alert("Não foi possível pesquisar o usuário.")
    }
}
