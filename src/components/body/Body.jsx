// React
import React, { Component } from 'react';
// CSS Body
import "../body/Body.css"
import Header from '../header/Header.jsx'
import Footer from '../footer/Footer.jsx'
import Article from '../sections/section1/Article.jsx'
class Body extends Component {
    nombreArticles = 3;

    onNbrArticlesParent = (arts) => {
        this.nombreArticles = arts
        console.log(arts)
        console.log(this.nombreArticles)
    }
    
    displayArticle(int) {
        if (int >= 2 ) {
            return <>  
            <Article titre="Les tartines" onNbrArticles = {this.onNbrArticlesParent} />  
            <Article titre="Coding School"/>  
            </>;
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