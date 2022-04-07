import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
    render() {
        return (
            <div className='container my-3'>
                <h2>News App- Headlines</h2>
                <div className='row my-3'>
                    <div className="col-md-4 ">
                        <NewsItems title="my_title" description="Data to show" />
                    </div>
                    <div className="col-md-4">
                        <NewsItems title="my_title" description="Data to show" />
                    </div>
                    <div className="col-md-4">
                        <NewsItems title="my_title" description="Data to show" />
                    </div>
                </div>
            </div>
        )
    }
}

export default News


