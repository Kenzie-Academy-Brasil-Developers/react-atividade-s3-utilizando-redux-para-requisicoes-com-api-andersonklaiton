import axios from "axios"

const apiDigimon = axios.create({
    baseURL: "https://digimon-api.vercel.app/api"
})

export default apiDigimon