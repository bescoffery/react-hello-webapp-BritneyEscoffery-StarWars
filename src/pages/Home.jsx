import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, {useEffect, useState} from "react";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()
  const [peopleList, setPeopleList] = useState([])

const getPeople = () => {
	fetch(store.baseURL + "people")
	.then((resp)=> {
			return resp.json()
		})
	.then((data) => {
		dispatch ({
			type: "set_people",
			payload: data.results
		});
		console.log(data.results)
		setPeopleList(store.people)
	})
}

// const getPlanets = () => {
// 	fetch(store.baseURL + "planets")
// 	.then((resp)=> {
// 			return resp.json()
// 		})
// 	.then((data) => {
// 		console.log("List of planets is:", data)
// 	})
// };

// const getVehicles = () => {
// 	fetch(store.baseURL + "vehicles")
// 	.then((resp)=> {
// 			return resp.json()
// 		})
// 	.then((data) => {
// 		console.log("List of vehicles is:", data)
// 	})
// };

useEffect(()=>{
	getPeople();
},[])

	return (
		<div className="text-center mt-5">
			<h1>Hello World</h1>
			{store.people.length > 0 
			? store.people.map((person,index)=>{
				return(
					<div>
						<p>{person.name}</p>
					</div>
				)
			})
			:"Loading..."
		}
		</div>
	);
}; 