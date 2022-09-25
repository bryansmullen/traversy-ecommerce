import React from 'react'
import { Card } from 'react-bootstrap'
import PropTypes from 'prop-types'
import Rating from './Rating'
import { Link } from 'react-router-dom'

function Product({ product: { _id, image, price, name, rating, numReviews } }) {
    return (
        <Card className={'my-3 p-3 rounded'}>
            <Link to={`/product/${_id}`}>
                <Card.Img src={image} variant={'top'} />
            </Link>

            <Card.Body>
                <Link to={`/product/${_id}`}>
                    <Card.Title as={'div'}>
                        <strong>{name}</strong>
                    </Card.Title>
                </Link>
                <Card.Text as={'div'}>
                    <Rating value={rating} text={`${numReviews} reviews`} />
                </Card.Text>

                <Card.Text as={'h3'}>${price}</Card.Text>
            </Card.Body>
        </Card>
    )
}

Product.propTypes = {
    product: PropTypes.object,
}

export default Product
