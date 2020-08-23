import React, { Component } from 'react'
import Header from './Header'
import Slider from './Slider'
import ProductList from './ProductList'
import Footer from './Footer'
import ShopName from './ShopName'

export default class BaiTapThucHanhLayout extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <Header />
                    <div className="row">
                        <div className="col-2">
                            <ShopName />
                        </div>
                        <div className="col-8">
                            <Slider />
                            <ProductList />
                            <ProductList />
                        </div>
                        <div className="col-2"></div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
