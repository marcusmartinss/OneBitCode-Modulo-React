import React from 'react';
import GrayImg from '../../shared/gray-img';
import DescriptionWithLink from '../../shared/description_with_link';

const Planet = (props) => {
    const names = ['a', 'b', 'c', 'd', 'e', 'f']

    let title;

    if (props.title_with_underline) {
        title = <h4><u>{props.name}</u></h4>
    } else {
        title = <h4>{props.name}</h4>
    }

    return (
        <div>
            {title}
            <p>
                <DescriptionWithLink
                    description_text={props.description_text}
                    description_url={props.description_url}
                />
            </p>
            <GrayImg
                img_url={props.img_url}
                gray={props.gray}
            />
            <h4>Satélites</h4>
            <ul>
                {names.map( (n) =>
                    <li>Satélite {n}</li>
                )}
            </ul>
            <hr />
        </div>
    )
}

export default Planet;