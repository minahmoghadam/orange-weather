import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
        <header>
            <nav className="row">
                <a className="navbar-brand">Orange Weather</a>
                <div className="main-nav">
                    <ul className="menu row">
                        <li>
                            <NavLink activeClassName="active" exact to="/">Dashboard</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to="/search">Search</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        )
    }
}
