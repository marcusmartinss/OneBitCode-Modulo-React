import React, { Fragment, useState } from "react";
import Planet from "./Planet";

async function getPlanets() {
    let response = await fetch(
        'http://localhost:3000/api/planets.json'
    )
    let data = await response.json()
    return data;
}

//  componentDidMount() {
//      getPlanets().then(data => {
//          setState(state => ({
//              planets: data['planets']
//          }))
//      })
//  }

const Planets = () => {
    const [planets, setPlanets] = useState([
        {
            "id": "mars",
            "name": "Mars",
            "description_text": "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System after Mercury. In English, Mars carries a name of the Roman god of war and is often referred to as the 'Red Planet'.",
            "img_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/220px-OSIRIS_Mars_true_color.jpg",
            "description_url": "https://en.wikipedia.org/wiki/Mars"
        }
    ]);

    const removeLastPlanet = () => {
        let new_planets = [...planets]
        new_planets.pop()
        setPlanets(new_planets);
    }

    const duplicateLastPlanet = () => {
        let last_planet = planets[planets.length - 1]
        setPlanets(new_planets => ({
            planets: [...planets, last_planet]
        }))
    }

    return (
        <Fragment>
            <h1>Planet List</h1>
            <button onClick={removeLastPlanet}>Remover último</button>
            <button onClick={duplicateLastPlanet}>Duplicar último</button>
            <hr />
            {planets.map((planet, index) =>
                <Planet
                    id={planet.id}
                    name={planet.name}
                    description_text={planet.description_text}
                    description_url={planet.description_url}
                    img_url={planet.img_url}
                    key={index}
                />
            )}
        </Fragment>
    )
}

export default Planets;