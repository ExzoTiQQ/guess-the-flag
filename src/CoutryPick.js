import React from 'react';

const CountryPick = ({choices}) => {
    console.log(choices);
    if(choices.length === 4) {
        var names = choices.map(country => country.name);
        var buttons = names.map(name => (
            <button key={name} type="button">{name}</button>
        ));
    }
    return (
        <div>
            {buttons}
        </div>
    )
}

export default CountryPick;