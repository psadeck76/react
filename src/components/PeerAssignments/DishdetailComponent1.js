import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

class DishdetailComponent extends Component {
  renderDish(dish) {
    return (
      <Card>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  }

  renderComments = (comments) => {
    comments.map((comment) => {
      return (
        <div>
          <li>
            <p>{comments.comment}</p>
          </li>
          <li>
            <p>-- {comment.author}</p>
          </li>
        </div>
      );
    });
  };

  render() {
    const item = this.props.dish.comments.map((comment) => {
      return (
        <div>
          <li>
            <p>{comment.comment}</p>
          </li>
          <li>
            <p>-- {comment.author}</p>
          </li>
        </div>
      );
    });

    if (this.props.dish != null)
      return (
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            {this.renderDish(this.props.dish)}
          </div>
          <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            <ul className="list-unstyled">{item}</ul>
            {/* {this.renderComments(this.props.dish.comments)} */}
          </div>
        </div>
      );
    else return <div></div>;
  }
}

export default DishdetailComponent;
