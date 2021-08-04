import axios from "axios"
import { setNews, setNewest, setAsk, setShow, setJobs } from "../reducers/pageRedu"


export const News = (page) => {
    return async dispatch => {
        try {
            const response = await axios.get(`https://api.hnpwa.com/v0/news/${page}.json`)
            dispatch(setNews(response.data))

        } catch (error) {
            alert(error)
        }
    }
}

export const Newest = (page) => {
    return async dispatch => {
        try {
            const response = await axios.get(`https://api.hnpwa.com/v0/newest/${page}.json`)
            dispatch(setNewest(response.data))

        } catch (error) {
            alert(error)
        }
    }
}

export const Ask = (page) => {
    return async dispatch => {
        try {
            const response = await axios.get(`https://api.hnpwa.com/v0/ask/${page}.json`)
            dispatch(setAsk(response.data))

        } catch (error) {
            alert(error)
        }
    }
}

export const Jobs = (page) => {
    return async dispatch => {
        try {
            const response = await axios.get(`https://api.hnpwa.com/v0/jobs/${page}.json`)
            dispatch(setJobs(response.data))

        } catch (error) {
            alert(error)
        }
    }
}

export const Show = (page) => {
    return async dispatch => {
        try {
            const response = await axios.get(`https://api.hnpwa.com/v0/show/${page}.json`)
            dispatch(setShow(response.data))

        } catch (error) {
            alert(error)
        }
    }
}