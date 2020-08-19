import React, { Component } from 'react'
import ProductComponent from './ProductComponent'

export default class ProductListComponent extends Component {
    render() {
        return (
            <section id="smartphone" className="container-fluid pt-5 pb-5 bg-dark">
                <h1 className="text-white text-center">BEST SMARTPHONE</h1>
                <div className="row">
                    <div className="col-3">
                        <ProductComponent />
                    </div>
                    <div className="col-3">
                        <ProductComponent />
                    </div>
                    <div className="col-3">
                        <ProductComponent />
                    </div>
                    <div className="col-3">
                        <ProductComponent />
                    </div>
                </div>
            </section>

        )
    }
}
