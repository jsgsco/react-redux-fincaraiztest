import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { CardCharacter } from './CardCharacter'
import { nextCharacters, prevCharacters } from '../redux/characterDuck'
import './ListCharacters.scss'

export const ListCharacters = () => {

    const characters = useSelector(store => store.character.results)
    const page = useSelector(store => store.character.info.prev)
    const dispatch = useDispatch()

    return (
        <section>
            <div className="characters">
                    {
                        characters.map(character => (
                            <div className="characters__item" key={character.id}>
                            <CardCharacter 
                                {...character}
                            />
                            </div>
                        ))
                    }
            </div>
            <div className="navegation">
                {
                    page ? ( <button className="item" onClick={() => dispatch(prevCharacters())}>Preview</button> ) : null
                }
                <button 
                    className="item"
                    onClick={() => dispatch(nextCharacters())}
                >Next</button>
            </div>
        </section>
    )
}

ListCharacters.PropTypes = {
    characters: PropTypes.array.isRequired,
    page: PropTypes.string,
    dispatch: PropTypes.func.isRequired
}