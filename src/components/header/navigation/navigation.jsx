import React, { Component } from 'react';
import './navigation.css'
class Navigation extends Component {
    whatLink  (lieu) {
        console.log(lieu);
    }
    render() {
        return (
            <nav>
                <div>
                    <button className='linkButton'onClick ={() => this.whatLink('Accueil')}>Link 1</button>
                    <button className='linkButton'onMouseOver ={() =>this.whatLink('Galerie')}>Link 2</button>
                    <button className='linkButton'onDoubleClick ={() =>this.whatLink('Contact')}>Link 3</button>
                </div>
                <div className='search'>
                    <span>Search: </span>
                    <input type="text"/>
                    <button className='searchButton'>Go</button>
                </div>

            </nav>
        );
    }
}

export default Navigation;