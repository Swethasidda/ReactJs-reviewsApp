// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {reviewsCount: 0}

  leftArrow = () => {
    const {reviewsCount} = this.state
    if (reviewsCount === 0) {
      this.setState({reviewsCount: 0})
    } else {
      this.setState(prevState => ({reviewsCount: prevState.reviewsCount - 1}))
    }
  }

  rightArrow = () => {
    const {reviewsCount} = this.state
    if (reviewsCount === 4) {
      this.setState({reviewsCount: 4})
    } else {
      this.setState(prevState => ({reviewsCount: prevState.reviewsCount + 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {reviewsCount} = this.state
    const {imgUrl, username, companyName, description} =
      reviewsList[reviewsCount]
    return (
      <div className="big-container">
        <h1 className="heading">Reviews</h1>
        <div className="small-container">
          <button
            type="button"
            data-testid="leftArrow"
            className="button"
            onClick={this.leftArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="image"
            />
          </button>
          <div className="users-profile">
            <img src={imgUrl} alt={username} className="user-img" />
            <p className="username">{username}</p>
            <p className="para2">{companyName}</p>
            <p className="para2">{description}</p>
          </div>
          <button
            type="button"
            data-testid="rightArrow"
            className="button"
            onClick={this.rightArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="image"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
