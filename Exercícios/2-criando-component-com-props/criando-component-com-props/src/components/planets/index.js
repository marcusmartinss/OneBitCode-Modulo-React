import React, { Fragment } from "react";
import Planet from "./planet";

const Planets = () => {
    return (
        <Fragment>
            <h1>Planet List</h1>
            <hr />
            <Planet
                name="Marte"
                description_text='Marte é o quarto planeta a partir do Sol, o segundo menor do Sistema Solar. Batizado em homenagem ao deus romano da guerra, muitas vezes é descrito como o "Planeta Vermelho", porque o óxido de ferro predominante em sua superfície lhe dá uma aparência avermelhada.'
                description_url="https://pt.wikipedia.org/wiki/Marte_(planeta)"
                img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/280px-OSIRIS_Mars_true_color.jpg"
            />
            
            <Planet
                name="Saturno"
                description_text="Saturno é o sexto planeta a partir do Sol e o segundo maior do Sistema Solar atrás de Júpiter. Pertencente ao grupo dos gigantes gasosos, possui cerca de 95 massas terrestres e orbita a uma distância média de 9,5 unidades astronômicas."
                description_url="https://pt.wikipedia.org/wiki/Saturno_(planeta)"
                img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Saturn_during_Equinox.jpg/300px-Saturn_during_Equinox.jpg"
            />
        </Fragment>
    )
}

export default Planets;