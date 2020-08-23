import React, { Component } from 'react'

export default class ShopName extends Component {
    render() {
        return (
            <div>
                <nav className="shopName nav flex-column">
                    <a className="nameShop nav-link active" href="#">Categori 1</a>
                    <a className="nameShop nav-link" href="#">Categori 2</a>
                    <a className="nameShop nav-link" href="#">Categori 3</a>
                </nav>
            </div>
        )
    }
}
