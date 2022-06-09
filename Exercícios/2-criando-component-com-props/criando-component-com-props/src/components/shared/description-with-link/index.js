import React, { Fragment } from "react";

const DescriptionWithLink = (props) => {
    return(
        <Fragment>
            {props.description_text}
            <br/>
            <a href={props.description_url}>Saiba mais!</a>
        </Fragment>
    )
}

export default DescriptionWithLink;