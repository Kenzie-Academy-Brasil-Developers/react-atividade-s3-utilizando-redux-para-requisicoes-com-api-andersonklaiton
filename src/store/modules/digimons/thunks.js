import apiDigimon from "../../../service/api"
import { addDigimon } from "./action"

const addDigimonsThunk = (digimon, setError)=>(dispatch)=>{
    const digimons = digimon.replace(/\b\w/g, l => l.toUpperCase())

    apiDigimon.get(`/digimon/name/${digimons}`)
    .then((response)=> dispatch(addDigimon(response)))
    .catch((error)=>{setError(true); console.log(error)})

}

export default addDigimonsThunk