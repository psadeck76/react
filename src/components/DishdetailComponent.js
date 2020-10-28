import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import moment from 'moment'

    function RenderDish({dish}){  
      //console.log(dish)    
      //console.log({dish})    
      if (dish != null){          
        return(          
            <Card>
              <CardImg  width="100%" src={dish.image} alt={dish.name} />             
              <CardBody>            
                  <CardTitle>{dish.name}</CardTitle>                      
                  <CardText>{dish.description}</CardText>                  
                  <CardText>{dish.comments[0].comment}</CardText>
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
          No Comments                  
        </div>
        );
      };      
    }

      const  DishDetail = (props) => {      
        console.log(props.dish)
            // Why is props.dish null???
            if(props.dish !=null){            
              return ( 
                <div className="container">
                  <div className="row">
                    <div className="col-12 col-md-5 m-1">
                      <RenderDish dish={props.dish} />                
                    </div> 
                    <div className="col-12 col-md-5 m-1">
                      <RenderComments comments={props.dish.comments} />
                    </div>          
                  </div> 
                </div>
              )
            }//End if
            else{
              return(
                <div>

                </div>
              )
            }
          }

export default DishDetail;