import PropTypes from 'prop-types'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { filterByName } from '../redux/characterDuck'
import './FilterByName.scss'

export const FilterByName = () => {

    const [value, setValue] = useState('')
    const dispatch = useDispatch()

    return (
        <div className="search">
            <input 
                type="text" 
                name="name"
                placeholder="Search By Name"
                onChange={(e) => setValue(e.target.value)}
                onKeyUp={() => dispatch(filterByName(value))}
            />
        </div>
    )
}

FilterByName.PropTypes = {
    value: PropTypes.string,
    dispatch: PropTypes.func
}