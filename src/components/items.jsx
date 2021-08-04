import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { News } from "../actions/pages"
import { Newest } from "../actions/pages"
import { Ask } from "../actions/pages"
import { Jobs } from "../actions/pages"
import { Show } from "../actions/pages"
import { useSelector } from "react-redux"
import { Navigation } from "./navigation"
import { Item } from "./item"

export const Items = () => {


    const isAuth = useSelector(state => state.topik)


    const [page, setPage] = useState(1)
    const [current, setCurrent] = useState([])
    const [sort, setSort] = useState("active")

    const dispatch = useDispatch()

    useEffect(() => {
        document.addEventListener("scroll", scrollDown)
        return function () {
            document.removeEventListener("scroll", scrollDown)
        }
    }, [isAuth])


    const scrollDown = (e) => {

        let res = isAuth.posts > page

        if ((e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) && res) {
            setPage(prevPage => prevPage + 1)
        }
    }



    useEffect(() => {
        dispatch(News(page))
    }, [])

    useEffect(() => {
        setCurrent(() => [...current, ...isAuth.currentTopik])
    }, [isAuth])


    const activeButton = () => {
        setSort("active_navigation")
    }

    const noneActiveButton = () => {
        setSort("active")
    }

    useEffect(() => {
        switch (isAuth.type) {
            case "News":
                return dispatch(News(page));
            case "Newest":
                return dispatch(Newest(page));
            case "Ask":
                return dispatch(Ask(page));
            case "Jobs":
                return dispatch(Jobs(page));
            case "Show":
                return dispatch(Show(page));
        }
    }, [page])


    return (
        <div className="row">
            <div className="col s12 offset-s0">

                <div className="card blue white">
                    <div className="card-content">

                        <div className="flex">


                            <div className="navigation">

                                <button
                                    className="btn"
                                    onClick={() => {
                                        setCurrent([])
                                        setPage(1)
                                        dispatch(News(page))
                                    }}
                                >
                                    News
                                </button>
                                <button
                                    className="btn"
                                    onClick={() => {
                                        setCurrent([])
                                        setPage(1)
                                        dispatch(Newest(page))
                                    }}
                                >
                                    Newest
                                </button>
                                <button
                                    className="btn"
                                    onClick={() => {
                                        setCurrent([])
                                        setPage(1)
                                        dispatch(Ask(page))
                                    }}
                                >
                                    Ask
                                </button>
                                <button
                                    className="btn"
                                    onClick={() => {
                                        setCurrent([])
                                        setPage(1)
                                        dispatch(Show(page))
                                    }}
                                >
                                    Show
                                </button>
                                <button
                                    className="btn"
                                    onClick={() => {
                                        setCurrent([])
                                        setPage(1)
                                        dispatch(Jobs(page))
                                    }}
                                >
                                    Jobs
                                </button>
                            </div>

                            <div>
                                <div className="list">

                                    {sort !== "active_navigation" ?
                                        <div className="sort" onClick={() => activeButton()} >CLOSE</div>
                                        :
                                        <div className="sort" onClick={() => noneActiveButton()} >SORT</div>}

                                    < Navigation setCurrent={setCurrent} current={current} type={isAuth.type} sort={sort} />

                                    {current.map((item, id) => <Item item={item} key={id} />)}

                                </div>
                                {/* {isAuth.posts > page && <button className="buttonIncriment" onClick={() => {
                                    setPage(prevPage => prevPage + 1)
                                }}>Lode more</button>} */}
                            </div>
                        </div>
                    </div>
                    <div className="card-action">
                    </div>
                </div>
            </div>
        </div >
    )
}

