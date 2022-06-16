import React, { Fragment } from "react";
import Planet from "./planet";

async function getPlanets() {
    let response = await fetch(
        'http://localhost:3000/api/planets.json'
    )
    let data = await response.json()
    return data;
}

class Planets extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            planets: [ ]
        }
    };

    componentDidMount() {
        getPlanets().then(data => {
            this.setState(state => ({
                planets: data['planets']
            }))
        })
    }

    removeLastPlanet = () => {
        let new_planets = [...this.state.planets]
        new_planets.pop()
        this.setState(state => ({
            planets: new_planets
        }))
    }

    duplicateLastPlanet = () => {
        let last_planet = this.state.planets[this.state.planets.length - 1]
        this.setState(state => ({
            planets: [...this.state.planets, last_planet]
        }))
    }
    
    render() {
        return (
            <Fragment>
                <h1>Planet List</h1>
                <button onClick={this.removeLastPlanet}>Remover último</button>
                <button onClick={this.duplicateLastPlanet}>Duplicar último</button>
                <hr />
                {this.state.planets.map((planet) =>
                    <Planet
                        name={planet.name}
                        description_text={planet.description_text}
                        description_url={planet.description_url}
                        img_url={planet.img_url}
                    />
                )}
            </Fragment>
        )
    }
}

export default Planets;