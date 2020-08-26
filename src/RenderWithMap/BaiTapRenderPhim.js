import React, { Component } from 'react'
import data from './DataFilms.json'
import './RenderPhim.css'

export default class BaiTapRenderPhim extends Component {
    renderFilm = () => {
        return data.map((film, index) => {
            return <div className="col-2 card mx-4 my-4 " key={index}>
                <img className="card-img-top" src={film.hinhAnh} style={{ height: 300 }} alt />
                <div className="card-body">
                    <h4 className="card-title">{film.tenPhim.length > 30 ? <span>{film.tenPhim.substr(0, 20)}...</span> : <span>{film.tenPhim}</span>}</h4>
                    <p className="card-text">{film.moTa.length > 75  ? <span>{film.moTa.substr(0,75)}...</span> : <span>{film.moTa}</span>}</p>
                </div>
            </div>
        })
    }

    render() {
        return (
            <div className="container-fluid divbao">
                <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'rgba(122,212,98,0.5)' }}>
                    <a className="navbar-brand" href="#">CYBERLEARN-MOVIE</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Filims</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown link
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className='background-big'>
                    <div style={{ width: '100%', height: 1000, backgroundColor: 'rgba(0,0,0,0.5)' }}>
                        <h3 className=""></h3>
                        <di className="row">
                            {this.renderFilm()}
                        </di>
                    </div>
                </div>
            </div>
        )
    }
}
