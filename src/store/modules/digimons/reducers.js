import { ADD_DIGIMONS } from "./actionTypes"

const digimonReducer = (state=[], action)=>{
    switch(action.type){
        case ADD_DIGIMONS:
            return [...action.digimon]
        default:
            return state
    }
}
export default digimonReducer