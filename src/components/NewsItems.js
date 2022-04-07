import React, { Component } from 'react'

export class NewsItems extends Component {
     //constructor(){
        // super();
      //   console.log("Its constructor") //called three times because constructor of NewsItem
         // state of card can be set here
    // }

    render() {
        let {title, description, imageUrl,newsUrl}=this.props;    //Destructuing concept if this.props is a object then 
        // pull data as title and description and make it available
        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a href={newsUrl} target="_blank" className="btn btn-sm  btn-primary">Read More</a>
                        {/* target="_blank" //is used to show data in new tab */}
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItems