import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
        <header className="container-fluid">
            <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand">Orange Weather</a>
                <div>
                    <ul className="mr-auto menu">
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
