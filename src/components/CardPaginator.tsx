import React from "react";
import Pagination from "react-bootstrap/Pagination";
import Card from "react-bootstrap/Card";

function CardPaginator () {

    let items = [];
    let active = 2;
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }

    return (
        <div>
            <Pagination>{items}</Pagination>
        </div>
    )
}

export default CardPaginator
