import React from "react"
import { useDispatch } from "react-redux"
import { setNews } from "../reducers/pageRedu"
import { setNewest } from "../reducers/pageRedu"
import { setAsk } from "../reducers/pageRedu"
import { setShow } from "../reducers/pageRedu"
import { setJobs } from "../reducers/pageRedu"


export const Navigation = ({ setCurrent, current, type , sort }) => {

    const dispatch = useDispatch()

    const sortHandler = (type) => {
        switch (type) {
            case "News":
                return dispatch(setNews(current));
            case "Newest":
                return dispatch(setNewest(current));
            case "Ask":
                return dispatch(setAsk(current));
            case "Jobs":
                return dispatch(setJobs(current));
            case "Show":
                return dispatch(setShow(current));
        }
    }

    return (

        <div className="item">
            <div className={sort}>
                <div className="sort_nav" onClick={() => {
                    setCurrent(arrSort => arrSort.sort((a, b) => (a.title > b.title) ? 1 : -1))
                    sortHandler(type)
                    setCurrent([])
                }}  >
                    <h3 className="sort_button">TITLE</h3>
                    <p className="sort_param">sort A-Z</p>

                </div>
                <div className="sort_nav" onClick={() => {
                    setCurrent(arrSort => arrSort.sort((a, b) => (a.domain > b.domain) ? 1 : -1))
                    sortHandler(type)
                    setCurrent([])
                }} >
                    <h3 className="sort_button"> DOMAIN</h3>
                    <p className="sort_param">sort A-Z</p>
                </div>
                <div className="sort_nav" onClick={() => {
                    setCurrent(arrSort => arrSort.sort((a, b) => (a.time > b.time) ? 1 : -1))
                    sortHandler(type)
                    setCurrent([])
                }}>
                    <h3 className="sort_button">DATE</h3>
                    <p className="sort_param">sort by date</p>
                </div>
            </div>
        </div>

    )
}

