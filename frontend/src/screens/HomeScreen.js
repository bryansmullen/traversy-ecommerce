import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions'
import Loader from '../components/Loader'
import Message from '../components/Message'

function HomeScreen() {
    const dispatch = useDispatch()
    const { loading, error, products } = useSelector(
        (state) => state.productList
    )

    useEffect(() => {
        dispatch(listProducts())
    }, [])

    return (
        <>
            <h1>Latest Products</h1>
            {loading ? ( // if loading is true, show loading message
                <Loader />
            ) : error ? ( // if error is true, show error message
                <Message variant={'danger'}>{error}</Message>
            ) : (
                // else, show products

                <Row>
                    {products.map((product) => (
                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                            <Product product={product} />
                        </Col>
                    ))}
                </Row>
            )}
        </>
    )
}

export default HomeScreen
