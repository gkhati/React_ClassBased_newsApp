import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
    articles=[          //taking only articles 
        {
            "source": {
                "id": "news24",
                "name": "News24"
            },
            "author": "Compiled by Herman Mostert",
            "title": "Proteas legend Du Preez retires from ODI cricket: 'I feel the time is right'",
            "description": "Proteas star Mignon du Preez has announced her retirement from One-Day International and Test cricket with immediate effect.",
            "url": "https://www.news24.com/sport/Cricket/WomensCricketWorldCup/proteas-legend-du-preez-retires-from-odi-cricket-i-feel-the-time-is-right-20220407",
            "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/663/93a5c0dda0554249a1f8690ca0d8b6f8.jpg",
            "publishedAt": "2022-04-07T10:33:29+00:00",
            "content": "<ul><li>Proteas women's star Mignon du Preez has called it a day in ODI and Test cricket.</li><li>The 32-year-old batter will now focus solely on T20 cricket.</li><li>She made her international debut… [+3442 chars]"
        },
        {
            "source": {
                "id": "bbc-sport",
                "name": "BBC Sport"
            },
            "author": "BBC Sport",
            "title": "Shane Warne memorial - watch & follow updates",
            "description": "Watch live coverage and follow text updates and tributes from the state memorial for Australian cricket legend Shane Warne at the Melbourne Cricket Ground.",
            "url": "http://www.bbc.co.uk/sport/live/cricket/60916236",
            "urlToImage": "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.22.0/images/bbc-sport-logo.png",
            "publishedAt": "2022-03-30T08:22:26.498888Z",
            "content": "Former England bowler and BBC cricket presenter Isa Guha, who became a colleague of Warne's in the commentary box: \"It has been a strange few weeks - a lot of shock and then we did our own tribute at… [+396 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
            "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
            "publishedAt": "2020-04-27T11:41:47Z",
            "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
            "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
            "publishedAt": "2020-03-30T15:26:05Z",
            "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        }
    ]

    constructor() {
        super();
        console.log("Its constructor of news component") //called three times because constructor of NewsItem
       //state of card can be set here
       this.state={   
          articles:this.articles ,
          loading:false
                        //makng the articles parts of my state
        // "status": "ok",
        // "totalResults": 4,
        // "articles": [
        //     {
        //         "source": {
        //             "id": "news24",
        //             "name": "News24"
        //         },
        //         "author": "Compiled by Herman Mostert",
        //         "title": "Proteas legend Du Preez retires from ODI cricket: 'I feel the time is right'",
        //         "description": "Proteas star Mignon du Preez has announced her retirement from One-Day International and Test cricket with immediate effect.",
        //         "url": "https://www.news24.com/sport/Cricket/WomensCricketWorldCup/proteas-legend-du-preez-retires-from-odi-cricket-i-feel-the-time-is-right-20220407",
        //         "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/663/93a5c0dda0554249a1f8690ca0d8b6f8.jpg",
        //         "publishedAt": "2022-04-07T10:33:29+00:00",
        //         "content": "<ul><li>Proteas women's star Mignon du Preez has called it a day in ODI and Test cricket.</li><li>The 32-year-old batter will now focus solely on T20 cricket.</li><li>She made her international debut… [+3442 chars]"
        //     },
        //     {
        //         "source": {
        //             "id": "bbc-sport",
        //             "name": "BBC Sport"
        //         },
        //         "author": "BBC Sport",
        //         "title": "Shane Warne memorial - watch & follow updates",
        //         "description": "Watch live coverage and follow text updates and tributes from the state memorial for Australian cricket legend Shane Warne at the Melbourne Cricket Ground.",
        //         "url": "http://www.bbc.co.uk/sport/live/cricket/60916236",
        //         "urlToImage": "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.22.0/images/bbc-sport-logo.png",
        //         "publishedAt": "2022-03-30T08:22:26.498888Z",
        //         "content": "Former England bowler and BBC cricket presenter Isa Guha, who became a colleague of Warne's in the commentary box: \"It has been a strange few weeks - a lot of shock and then we did our own tribute at… [+396 chars]"
        //     },
        //     {
        //         "source": {
        //             "id": "espn-cric-info",
        //             "name": "ESPN Cric Info"
        //         },
        //         "author": null,
        //         "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
        //         "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
        //         "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
        //         "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
        //         "publishedAt": "2020-04-27T11:41:47Z",
        //         "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        //     },
        //     {
        //         "source": {
        //             "id": "espn-cric-info",
        //             "name": "ESPN Cric Info"
        //         },
        //         "author": null,
        //         "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
        //         "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
        //         "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
        //         "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
        //         "publishedAt": "2020-03-30T15:26:05Z",
        //         "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        //     }
        // ]
    }
    }

    render() {
        return (
            <div className='container my-3'>
                <h2>News App- Headlines</h2>
                <div className='row '>
                {this.state.articles.map((element)=>{
                   return <div className="col-md-4 " key={element.url}>     
                   {/* key should be given to the element which will  be returned and should be unique */}
                        <NewsItems title={element.title.slice(0,45)} description={element.description.slice(0,88)} imageUrl={element.urlToImage} 
                        newsUrl={element.url}/>
                    </div>
                })}
                </div>
            </div>
        )
    }
}

export default News


