import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {
    render() {
        return (
            <div className="row my-2">
                <div className="col-4">
                    <ProductItem />
                </div>
                <div className="col-4">
                    <ProductItem />
                </div>
                <div className="col-4">
                    <ProductItem />
                </div>
            </div>
        )
    }
}
