export const initialStore=()=>{
  return{
    baseURL: "https://www.swapi.tech/api/",
    characters: [],
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'set-characters': //reads as 'if type = add_task'
    console.log("action tag:", action.payload)
      return {
        ...store,
        characters: action.payload
      };

    default:
      throw Error('Unknown action.');
  }    
}
