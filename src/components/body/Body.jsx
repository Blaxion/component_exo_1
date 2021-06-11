// React
import React, { Component } from 'react';
// CSS Body
import "../body/Body.css"
import Header from '../header/Header.jsx'
import Footer from '../footer/Footer.jsx'
import Article from '../sections/section1/Article.jsx'
class Body extends Component {
    nombreArticles = 2;
    displayArticle(int) {
        if (int >= 2 ) {
            return <Article/>;
        }
    }
    render() {
        
        return (
            <div className='bodyApp'>
                <Header/>
                {this.displayArticle(this.nombreArticles)}
                <Footer/>
            </div>
        );
    }
}

export default Body;