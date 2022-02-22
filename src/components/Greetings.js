import React from "react";

const Greetings = (props) => {
    const {lang, children} = props;

    let print = ''
    if(lang ==="de") print = "Hallo"
    if(lang ==="en") print = "Hello"
    if(lang ==="es") print = "Hola"
    if(lang ==="fr") print = "Bonjour"

    return (
        <div className="Greetings">
            <p>{print} {children}</p>
        </div>
    )
}


export default Greetings;