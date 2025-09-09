export const initialStore=()=>{
  return{
    baseURL: "https://www.swapi.tech/api/",
    characters: [],
    vehicles: [],
    planets: [],
    favorites: [],
    // details: {}
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'set-characters': //reads as 'if type = add_task'
      
    return {
        ...store,
        characters: action.payload
      };
      
      case 'set-favorites': //reads as 'if type = add_task'
      console.log("action", action)
      return {
        ...store,
       favorites: [...store.favorites, action.payload]
      }
      case 'set-vehicles': //reads as 'if type = add_task'
      console.log("vehicle", action)
      return {
        ...store,
        vehicles: action.payload  // similar to set up for characters, not similar to setting up favorites
      }
      case 'set-planets': //reads as 'if type = add_task'
      return {
        ...store,
       planets: action.payload
      }
   
      //  case 'set-details': //reads as 'if type = add_task'
      // return {
      //   ...store,
      //   details: action.payload
      // };
    default:
      throw Error('Unknown action.');
  }    
}
