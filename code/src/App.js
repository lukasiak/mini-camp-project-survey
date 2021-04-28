import { Header } from 'components/Header'
import { Start } from 'components/Start'
import { Question } from 'components/Question'
import React, { useState } from 'react'
import data from './data.json';
import { Container } from '@material-ui/core';
import { Summary } from 'components/Summary';

export const App = () => {
    const [pageNumber, updatePageNumber] = useState(0);
    const [showSummaryPage, updateShowSummaryPage] = useState(false);

    const [firstPokemonGame, updateFirstPokemonGame] = useState(null);
    const [favoriteType, updateFavoriteType] = useState(null);
    const [favoriteRegion, updateFavoriteRegion] = useState(null);
    const [favoritePokemon, updateFavoritePokemon] = useState(null);

    const updateReply = (questionId, value) => {
        switch(questionId) {
            case 1:
                updateFirstPokemonGame(value);
                break;
            case 2:
                updateFavoriteType(value);
                break;
            case 3:
                updateFavoriteRegion(value);
                break;
            case 4:
                updateFavoritePokemon(value);
                break;
            default:
                break;
        }
    };

    return (
        <React.Fragment>
            <Header />
            <Container maxWidth="sm">
                {
                    showSummaryPage ? (
                        <Summary 
                            pokemonGame={firstPokemonGame} 
                            pokemonType={favoriteType} 
                            pokemonRegion={favoriteRegion} 
                            favoritePokemon={favoritePokemon} />
                    ) : (
                        pageNumber === 0 ? (
                            <Start updatePageNumber={updatePageNumber} />
                        ) : (
                            <form className="form">
                                {
                                    data.questions.map((question, index) => {
                                        if (pageNumber === index + 1) {
                                            const isLastQuestion = pageNumber === data.questions.length;

                                            return (<Question 
                                                key={index} 
                                                questionId={question.id} 
                                                questionText={question.text}
                                                questionOptions={question.options}
                                                isLastQuestion={isLastQuestion}
                                                updatePageNumber={updatePageNumber}
                                                updateShowSummaryPage={updateShowSummaryPage}
                                                updateFavoritePokemon={updateFavoritePokemon}
                                                updateReply={updateReply} />)
                                        }
                                        else {
                                            return <></>
                                        }
                                    })
                                }
                            </form>
                        )
                    )
                }
            </Container>
        </React.Fragment>
    )
}
