import React, { Component } from "react";
import "./estilo.css";

function listCategory(category) {
    if (category.length > 0) {
        return (category.map(
            (c) => (
                <li key={c.id}>
                    Name: {c.name} <br />
                    Category Operator: {c.category_operator}
                </li>
            )

        ))
    }
    return (<li>
        "Categoria não cadastrada!"
    </li>
    )
}

class Category extends Component {

    render() {
        return (

            <ul> {listCategory(this.props.category)}
                {/* {this.props.category.map(
                    (category) => {
                        // if category.name === 'CQ-WW-CW'{
                        //     return 'invalido';
                        // }

                        if (category.name) {
                            return (
                                <li>invalido</li>
                            )
                        }

                        else {
                            return (
                                <li>
                                    Name: {category.name} <br />
                                    Category Operator: {category.category_operator}
                                </li>)
                        }
                    }


                    // ? 
                    // 'CQ-WW-CW':'invalido'
                )} */}
            </ul>
        );
    }
}

export default Category;