import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let { title , description , imgUrl, url } = this.props
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
            <img src= { this.props.imgUrl } className="card-img-top" alt="image related to the news"/>
            <div className="card-body">
            <h5 className="card-title">{ this.props.title}</h5>
            <p className="card-text">{ `${this.props.description.slice(0,90)}...` }</p>
            <a href= {this.props.url} target='_blank' className="btn btn-sm btn-primary">Read more</a>
            </div>
            </div>
      </div>
    )
  }
}
