import React from 'react';
import shuffle from 'shuffle-array';

const CountryPick = ({choices, onClick}) => {
    choices = shuffle(choices);
    if(choices.length === 4) {
        var names = choices.map(country => country.name);
        var buttons = names.map(name => (
            <button onClick={onClick} key={name} type="button">{name}</button>
        ));
    }
    return (
        <div>
            {buttons}
        </div>
    )
}

export default CountryPick;