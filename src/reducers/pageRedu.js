const NEWS = "NEWS"
const NEWEST = "NEWEST"
const ASK = "ASK"
const SHOW = "SHOW "
const JOBS = "JOBS "


const defaultState = {
    currentTopik: [],
    posts: 0,
}

export default function topikReducer(state = defaultState, action) {

    switch (action.type) {
        case NEWS:
            return {
                ...state,
                currentTopik: action.payload,
                posts: 10,
                type: "News",
            }
        case NEWEST:
            return {
                ...state,
                currentTopik: action.payload,
                posts: 12,
                type: "Newest"
            }
        case ASK:
            return {
                ...state,
                currentTopik: action.payload,
                posts: 2,
                type: "Ask"
            }
        case SHOW:
            return {
                ...state,
                currentTopik: action.payload,
                posts: 2,
                type: "Show"
            }
        case JOBS:
            return {
                ...state,
                currentTopik: action.payload,
                posts: 1,
                type: "Jobs"
            }
        default:
            return state
    }
}



export const setNews = topik => ({ type: NEWS, payload: topik })

export const setNewest = topik => ({ type: NEWEST, payload: topik })

export const setAsk = topik => ({ type: ASK, payload: topik })

export const setShow = topik => ({ type: SHOW, payload: topik })

export const setJobs = topik => ({ type: JOBS, payload: topik })

