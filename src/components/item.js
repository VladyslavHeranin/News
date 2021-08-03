import React from "react"

export const Item = ({ item }) => {

        return (<div className="item"   >

                <a href={item.url} className="value_title">
                        <span className="value_name">Title: </span>    <span className="value">{item.title}</span>
                </a>

                {item.domain !== undefined ?
                        <p className="value_title">  <span className="value_name">Domain: </span>  <span className="value">{item.domain}</span> </p>
                        :
                        <p className="value_title"> <span className="value_name">Domain: </span>  <span className="value">domain not specified</span> </p>
                }

                <p className="value_title"> <span className="value_name">Time: </span>  <span className="value"> {item.time_ago}</span></p>
        </div>)
}