import PropTypes from 'prop-types'
import './CardCharacter.scss'

export const CardCharacter = (props) => {

    const { name, image, status, origin, location, species } = props

    return (
        <div className="character">
            <img src={image} alt={name} />
            <div className="character__info">
                <h3>{name}</h3>
                <div className="status">
                    { status == 'Alive' && ( <span className="alive"></span> ) }
                    { status == 'Dead' && ( <span className="dead"></span> ) }
                    { status == 'unknown' && ( <span className="default"></span> ) }
                    <span>{ status } - { species }</span>
                </div>
                <div className="origen">
                    <span>
                        Origin:
                        { origin.name }
                    </span>
                </div>
                <div className="location">
                    <span>
                        Location: 
                        { location.name }
                    </span>
                </div>
            </div>
        </div>
    )
}

CardCharacter.PropTypes = {
    name: PropTypes.string.isRequired, 
    image: PropTypes.string.isRequired, 
    status: PropTypes.string.isRequired, 
    origin: PropTypes.string.isRequired, 
    location: PropTypes.string.isRequired, 
    species: PropTypes.string.isRequired
}