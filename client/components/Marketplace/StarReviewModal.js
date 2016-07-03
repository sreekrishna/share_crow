import React, { Component, PropTypes } from 'react';
import Modal from 'react-modal';
// import StarRating from './StarRating';
import StarRatingComponent from 'react-star-rating-component';

class StarReviewModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      rating: 3,
      render: false,
      username: '',
      starRating: null,
    };

    // this.username = props.userObj.name;
    this.onStarClick = this.onStarClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    // this.sendRating = this.sendRating.bind(this);
  }

  onStarClick(name, value) {
    this.setState({ rating: value, render: true });
    console.log('this is the rating now', this.state.rating);
    // this.props.sendRating(value);
    this.setState({
      render: false,
    });
  }
  handleSubmit() {
  }

  // sendRating(rating) {
  //   this.setState({
  //     starRating: rating,
  //   });
  //   console.log(this.state.starRating, rating);
  // }
  handleUsername(value) { this.setState({ username: value.target.value }); }
  handlePassword(value) { this.setState({ password: value.target.value }); }

  openModal() { this.setState({ open: true }); }
  closeModal() { this.setState({ open: false }); }

  render() {
    return (
      <div className="star-review-wrapper">
        <div
          className="star-review-modal"
          onClick={this.openModal}
        ><span className="glyphicon glyphicon-user"></span> Login</div>
        <Modal
          style={{ content: { height: '320px' } }}
          isOpen={this.state.open}
          onRequestClose={this.closeModal}
        >
          <div
            id="rating-modal"
            className="center"
          >
            <h4 className="center">Rate your experience with Owner Username</h4>
            <h2>Rating: {this.state.rating}</h2>
            <StarRatingComponent
              // name:"rate1"
              starCount={5}
              value={this.state.rating}
              onStarClick={this.onStarClick}
            />
            <div>
              <input
                className="modal-login-button button"
                type="submit"
                value="Send Review"
                onClick={this.handleSubmit}
              />
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

StarReviewModal.propTypes = {
  userObj: PropTypes.object.isRequired,
};

export default StarReviewModal;
