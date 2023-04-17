import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  
  constructor(){
    super()
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }

  async componentDidMount(){
    let url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=641ce36d722f436e9b6264c873cd4214&page=1&pageSize=10'
    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({articles: parsedData.articles,totalResults:parsedData.totalResults})
  }

  handlePreviousClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=641ce36d722f436e9b6264c873cd4214&page=${this.state.page - 1}&pageSize=10`
    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
    })
  }
  handleNextClick = async () => {
    if(this.state.page+1>Math.ceil(this.state.totalResults/10)){

    }else{
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=641ce36d722f436e9b6264c873cd4214&page=${this.state.page + 1}&pageSize=10`
      let data = await fetch(url)
      let parsedData = await data.json()
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles
      })
    }
    
  }
  render() {
    return (
      <div className='container my-3'>
        <h1>NewsMonkey - Top Headlines</h1>

        <div className='row'>
          {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url} >
            <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
          })}
          
        </div>
        <div className='container d-flex justify-content-between'>
          <button disabled={this.state.page<=1} type="button" class="btn btn-success" onClick={this.handlePreviousClick}>&laquo; Previous</button>
          <button type="button" class="btn btn-success" onClick={this.handleNextClick}>Next &raquo;</button>
        </div>
      </div>
    )
  }
}

export default News
