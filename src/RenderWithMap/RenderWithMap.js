import React, { Component } from 'react'

export default class RenderWithMap extends Component {

    producList = [
        { id: 1, name: 'Iphone X', price: 1000 },
        { id: 2, name: 'Samsung Note 10plus', price: 3000 },
        { id: 3, name: 'Htc m10', price: 2000 },

    ]

    renderProduct = () => {
        // let content = [];
        // for (let i = 0; i < this.producList.length; i++) {
        //     let product = this.producList[i];
        //     let carProduct = <div key={i} classname="col-4">
        //         <div className="card text-left">
        //             <img className="card-img-top" src="holder.js/100px180/" alt />
        //             <div className="card-body">
        //                 <h4 className="card-title">{product.name}</h4>
        //                 <p className="card-text">{product.price}</p>
        //             </div>
        //         </div>
        //     </div>;
        //     content.push(carProduct);
        // }
        // console.log(content)

        let arrJSXProduct = this.producList.map((product,index)=>{
            return <div className="col-4" key={index}>
                        <div classname="card text-left">
                            <img classname="card-img-top" src="http://picsum.photos/200/200" alt="{product.name}" />
                            <div classname="card-body">
                                <h4 classname="card-title">{product.name}</h4>
                                <p classname="card-text">{product.price}</p>
                            </div>
                        </div>
                    </div>
        })
        return arrJSXProduct;
    }

    renderDienThoai = () =>{
        return this.producList.map((item,index)=>{
            return <tr key = {index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                    <button className='text-danger'>Xoá</button>
                </td>
            </tr>

        })
    }


    render() {
        return (
            // [<div key={1} className="container">
            //     123123132
            // </div>,
            // <div key={2} className="container">
            //     123123132
            // </div>]

            // <div className="container">
            //     {this.renderProduct()}
            // </div>
            <div className='container'>
                <h3 className='text-center'>Danh sách sản phẩm</h3>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.renderDienThoai()
                        }
                        </tbody>
                </table>
            </div>
        )
    }
}
