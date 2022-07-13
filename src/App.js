import PropTypes from 'prop-types'
import generateStore from './redux/store'
import { Provider } from 'react-redux'
import { ListCharacters } from "./components/ListCharacters"
import './App.scss'
import { FilterByName } from './components/FilterByName'

function App() {

    const store = generateStore()

    return (
        <Provider store={store}>
            <div className="container">
                <h1>Rick and Morty</h1>
                <FilterByName />
                <ListCharacters />
            </div>
        </Provider>
    )
}

export default App

App.PropTypes = {
    store: PropTypes.func
}