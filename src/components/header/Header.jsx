import React, { Component } from 'react';
import Navigation from './navigation/navigation.jsx'
class Header extends Component {
    render() {
        return (
            <header>
                <Navigation/>
            </header>
        );
    }
}

export default Header;