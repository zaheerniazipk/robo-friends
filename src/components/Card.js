import React from "react";


const Card = (props) => {
    const { id, name, email } = props;
    return (
        <div className="dib tc bg-light-green pa3 ma2 br3 bw2 grow shadow-5">
            <img src={`https://robohash.org/${id}?200x200`} alt="robot" />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>

        </div>
    )
}

export default Card;