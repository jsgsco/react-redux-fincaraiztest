import axios from 'axios'

const initialState = {
    info: {},
    results: []
}

const GET_CHARACTER_SUCCESS = 'GET_CHARACTER_SUCCESS'
const NEXT_CHARACTER_SUCCESS = 'NEXT_CHARACTER_SUCCESS'
const PREV_CHARACTER_SUCCESS = 'PREV_CHARACTER_SUCCESS'
const SEARCH_CHARACTER_SUCCESS =  'SEARCH_CHARACTER_SUCCESS'

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_CHARACTER_SUCCESS:
          return { ...state, ...action.payload }
        case SEARCH_CHARACTER_SUCCESS:
            return { ...state, ...action.payload, }
        case NEXT_CHARACTER_SUCCESS:
            return { ...state, ...action.payload }
        case PREV_CHARACTER_SUCCESS:
            return { ...state, ...action.payload }
        default:
            return state
    }
}

export const getCharacters = () => (dispatch) => {
    axios.get('https://rickandmortyapi.com/api/character')
        .then(res => {
            dispatch({
                type: GET_CHARACTER_SUCCESS,
                payload: res.data
            })
        })
}

export const filterByName = (name) => (dispatch) => {
    const formatName = name.toLowerCase()
    axios.get(`https://rickandmortyapi.com/api/character/?name=${formatName}`)
        .then(res => {
            dispatch({
                type: SEARCH_CHARACTER_SUCCESS,
                payload: res.data
            })
        })
}

export const nextCharacters = () => (dispatch, getState) => {
    const { info } = getState().character
    axios.get(info.next)
        .then(res => {
            dispatch({
                type: NEXT_CHARACTER_SUCCESS,
                payload: res.data
            })
        })
}

export const prevCharacters = () => (dispatch, getState) => {
    const { info } = getState().character
    axios.get(info.prev)
        .then(res => {
            dispatch({
                type: PREV_CHARACTER_SUCCESS,
                payload: res.data
            })
        })
}