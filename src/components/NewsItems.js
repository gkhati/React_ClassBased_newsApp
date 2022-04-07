import React, { Component } from 'react'

export class NewsItems extends Component {
    render() {
        let {title, description}=this.props;    //Destructuing concept if this.props is a object then 
        // pull data as title and description and make it available
        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <img src="https://cdn.24.co.za/files/Cms/General/d/663/93a5c0dda0554249a1f8690ca0d8b6f8.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href="/newsDetail" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItems