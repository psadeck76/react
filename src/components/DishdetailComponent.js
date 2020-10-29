import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import moment from 'moment'
import { Link } from 'react-router-dom';

    function RenderDish({dish}){
      if (dish != null){
        return(
            <Card>
              <CardImg  width="100%" src={dish.image} alt={dish.name} />
              <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
        );
      }
      else{
        return(
          <div>

          </div>
        );
      }
    }

    function RenderComments({comments}){
      if (comments != null){
          const comm = comments.map((comment) =>{
              return(
                <div>
                  <ul style={{listStyleType: 'none'}}>
                    <li>
                      {comment.comment}
                    </li>
                    <br/>
                    <li>
                        -- {comment.author}, {moment(comment.date).format('MMMM DD YYYY')}
                    </li>
                  </ul>
                </div>
              );
      })
          return(
            <div>
              <div>
                <h4>Comments</h4>
              </div>
              <div>
                {comm}
              </div>
            </div>
          );
      }
      else{
        return(
        <div>
         
        </div>
        );
      };
    }

      const  DishDetail = (props) => {
        console.log(props.dish)
            if(props.dish !=null){
              return (
                <div className="container">
                <div className="row">
                    <Breadcrumb>                        
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
                </div>
              );
            }
            else{
              return(
                <div>

                </div>
              )
            }
          }

export default DishDetail;