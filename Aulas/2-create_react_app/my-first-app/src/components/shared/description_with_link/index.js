import React, { Fragment } from "react";

const DescriptionWithLink = (props) => {
    if ( !props.description_text )  
        return null;

    if (props.description_url) {
        return(
            <Fragment>
                {props.description_text}
                <br/>
                <a href={props.description_url}>Saiba mais!</a>
            </Fragment>
        )
    } else {
        return (
            <Fragment>
                <p><u>
                    {props.description_text}
                </u></p>
            </Fragment>
        )
    }
}

export default DescriptionWithLink;