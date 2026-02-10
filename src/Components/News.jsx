import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

    constructor (){
        super();
        this.state = {
            article : [],
            loading : false,
            page: 1
        }
    }

    async componentDidMount(){
        const url = import.meta.env.VITE_MY_URL
        const data = await fetch(url)
        const parsedData = await data.json()
        this.setState({
            article: parsedData.articles
        })
    }

    handlePreviousPage = async () =>{
        const url = `${import.meta.env.VITE_MY_URL}&page=${this.state.page - 1}`;
        const data = await fetch(url)
        const parsedData = await data.json()
        this.setState({
            article: parsedData.articles,
            page : this.state.page - 1
        })
    }
    
    handleNextPage = async () =>{
        const url = `${import.meta.env.VITE_MY_URL}&page=${this.state.page + 1}`;
        const data = await fetch(url)
        const parsedData = await data.json()
        this.setState({
            article: parsedData.articles,
            page : this.state.page + 1
        })
    }
  render() {
    return (
      <div className='container my-3'>
        <h2>Today's Headlines</h2>
        <div className='row my-3'>
             {this.state.article.map((e) => {
                return (
                    <div className='col-md-4 my-3' key = {e.url}>
                        <NewsItem title = { e.title } description = { e.description } imgUrl = { e.urlToImage } url = {e.url} />
                    </div>
                )
             })}
        </div>
        <div className='d-flex justify-content-between'>
        <button type="button" className="btn btn-dark" onClick={ this.handlePreviousPage } disabled = {this.state.page <= 1}>&larr; Previous</button>
        <button type="button" className="btn btn-dark" onClick={ this.handleNextPage }>Next &rarr;</button>
        </div>
      </div>
    )
  }
}
