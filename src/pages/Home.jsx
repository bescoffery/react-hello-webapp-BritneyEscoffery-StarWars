import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './home.css';

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	const [characterList, setCharactersList] = useState([])

	const getCharacters = () => {
		fetch(store.baseURL + "people")
			.then((resp) => {
				return resp.json()
			})
			.then((data) => {
				dispatch({
					type: "set-characters",
					payload: data.results
				})
				// console.log(data.results)
				// setCharactersList(store.characters)
			});
	}

	const getVehicles = () => {
		fetch(store.baseURL + "vehicles")
			.then((resp) => {
				return resp.json()
			})
			.then((data) => {
				dispatch({
					type: "set-vehicles",
					payload: data.results
				})
				console.log("List of vehicles is:", store.vehicles)
			})
	};

	const getPlanets = () => {
		fetch(store.baseURL + "planets")
			.then((resp) => {
				return resp.json()
			})
			.then((data) => {
				dispatch({
					type: "set-planets",
					payload: data.results
				})
				console.log("List of planets is:", data)
			})
	};

	
	useEffect(() => {
		getCharacters()
	}, []
	)

	useEffect(() => {
		getVehicles()
	}, []
	)

	useEffect(() => {
		getPlanets()
	}, []
	)

	return (
		<div className="text-center mt-5">
			<h1>Characters</h1>
			<div className="characterContainer d-flex">
				{store.characters.length > 0 ? //conditional
					store.characters.map( // map is where characters are coming from
						(characters) => {
							return (
								<div>
									<p className="mb-0">{characters.name}</p>

									<Link to={"/detail/" + characters.uid}>
										<button type="button" className="btn btn-danger mt-2 mb-3">
											click for details
										</button>
									</Link>
									<button type="button"
										className="btn btn-primary"
										onClick={() => { dispatch({ type: 'set-favorites', payload: characters.name }) }}>Favorite</button>
								</div>
							)
						}
					)
					: "Loading..."
				}
			</div>
				
			<h1>Vehicles</h1>
			<div className="vehicleContainer d-flex">
				{store.vehicles.length > 0 ? //conditional
					store.vehicles.map(
						(vehicles) => {
							return (
								<div>
									<p className="mb-0">{vehicles.name}</p>

									<Link to={"/detail/" + vehicles.uid}>
										<button type="button" className="btn btn-danger mt-2 mb-3">
											click for details
										</button>
									</Link>
									<button type="button"
										className="btn btn-primary"
										onClick={() => { dispatch({ type: 'set-favorites', payload: vehicles.name }) }}>Favorite</button>
								</div>
							)
						}
					)
					: "Loading..."
				}
			</div>
			<h1>Planets</h1>
			<div className="planetContainer d-flex">
				{store.planets.length > 0 ? //conditional
					store.planets.map(
						(planets) => {
							return (
								<div>
									<p className="mb-0">{planets.name}</p>

									<Link to={"/detail/" + planets.uid}>
										<button type="button" className="btn btn-danger mt-2 mb-3">
											click for details
										</button>
									</Link>
									<button type="button"
										className="btn btn-primary"
										onClick={() => { dispatch({ type: 'set-favorites', payload: planets.name }) }}>Favorite</button>
								</div>
							)
						}
					)
					: "Loading..."
				}
			</div>
		</div>
	);
}; 