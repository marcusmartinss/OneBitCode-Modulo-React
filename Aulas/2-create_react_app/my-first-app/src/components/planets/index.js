import React, { Fragment } from "react";
import Planet from "./planet";

class Planets extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            planets: [
                {
                    name: "Marte",
                    description_text: 'Marte é o quarto planeta a partir do Sol, o segundo menor do Sistema Solar. Batizado em homenagem ao deus romano da guerra, muitas vezes é descrito como o "Planeta Vermelho", porque o óxido de ferro predominante em sua superfície lhe dá uma aparência avermelhada.',
                    description_url: "https://pt.wikipedia.org/wiki/Marte_(planeta)",
                    img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/280px-OSIRIS_Mars_true_color.jpg",
                },
                {
                    name: "Saturno",
                    description_text: "Saturno é o sexto planeta a partir do Sol e o segundo maior do Sistema Solar atrás de Júpiter. Pertencente ao grupo dos gigantes gasosos, possui cerca de 95 massas terrestres e orbita a uma distância média de 9,5 unidades astronômicas.",
                    description_url: 'https://pt.wikipedia.org/wiki/Saturno_(planeta)',
                    img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Saturn_during_Equinox.jpg/300px-Saturn_during_Equinox.jpg"
                },
            ]
        }
    };

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