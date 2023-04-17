import React, { Component } from "react";

export class NewsItem extends Component {
  
  render() {
    let {title,description,imageUrl,newsUrl} = this.props
    return (
      <div className="my-3">
        <div className="card" style={{width: "18rem"}}>
          <img src={imageUrl?imageUrl:"https://www.livemint.com/lm-img/img/2023/04/15/600x338/2-0-1244114454-iStock-839214100-0_1679615828655_1681579000066_1681579000066.jpg"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">
              {description}...
            </p>
            <a href={newsUrl} className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
