import React, { Component } from 'react';
import sandwich from "./sandwichMaggle.png"
import './Article.css'
class Article extends Component {
    nombreArticles = 2
    render() {
        return ( 
            <section>
                <div>
                    <div>
                        <img src={sandwich} alt=""  width='40%'/>
                    </div>
                    <div>
                        <h1>Mon premier Article</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente molestiae sit laudantium facere beatae ut repellendus voluptatem nostrum architecto aspernatur. Nulla ad, fuga tempore error molestiae fugiat necessitatibus. Qui porro provident aperiam deserunt quis! Aperiam consequuntur ipsum necessitatibus neque eveniet dolore officiis nisi praesentium consequatur, ratione rem corporis voluptas illum doloribus accusantium itaque in, eum sunt ipsam, omnis unde. Corporis, eos? Debitis assumenda laboriosam in sed obcaecati cum! Perspiciatis veritatis minus amet facilis, modi quisquam alias ipsa possimus, vitae praesentium optio quibusdam cumque dicta facere voluptate doloremque voluptatibus fugit cupiditate velit distinctio. Minus doloremque tenetur reprehenderit incidunt maxime exercitationem officia?</p>
                        <button onClick={()=>{console.log(this.props.titre)}}>Quel est mon titre?</button>
                        <button onClick={()=>{this.props.onNbrArticles(this.nombreArticles)}}>Nombres d'articles</button>
                    </div>
                </div>
            </section>
        );
    }
}

export default Article;