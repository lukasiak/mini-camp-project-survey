import React from 'react';
import { SummaryBox } from './SummaryBox';

export const Summary = ({
    pokemonGame,
    pokemonType, 
    pokemonRegion,
    favoritePokemon
}) => {
    return (
        <React.Fragment>
            <SummaryBox question="Your first Pokémon game" answer={pokemonGame}></SummaryBox>
            <SummaryBox question="Your favorite Pokémon type" answer={pokemonType}></SummaryBox>
            <SummaryBox question="Your favorite Pokémon region" answer={pokemonRegion}></SummaryBox>
            <SummaryBox question="Your favorite Pokémon =)" answer={favoritePokemon}></SummaryBox>
        </React.Fragment>
    );
};