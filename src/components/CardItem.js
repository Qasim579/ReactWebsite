import React from 'react'
import {Link} from 'react-router-dom'

const CardItem = () => {
    return (
        <>
        <li className="cards_items">
            <Link className="cards_item_link">
                <figure className="card_item_pic-wrap">
                    <img src="/" alt="travel img    " className="cards_item_img" />
                </figure>
                <div className="card_item_info">
                    <h5 className="cards_item_text"></h5>
                </div>
            </Link>
        </li>
            
        </>
    )
}

export default CardItem
