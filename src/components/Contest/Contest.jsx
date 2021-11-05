import React, { Component } from "react";
import "./estilo.css";
//import "../Category"
//import "../Category/Category"
import Category from "../Category";


class Contest extends Component {

    render() {
        return (

            <ol key="ol.contest">{
                this.props.contest.map((item) => (

                    <li key={item.id}>
                        Contest_ID: {item.id},
                        Contest_Name: {item.name},
                        Start_Date: {item.start_date},
                        Finish_Date: {item.finish_date}
                        <Category category={item.category} />

                    </li>

                )

                )
            }
            </ol>
        );
    }
}

export default Contest;