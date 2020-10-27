import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import moment from 'moment'

class DishDetail extends Component {
    constructor(props){
        super(props);        
    }  

    render(){
      var selectedDish = this.props.dish

      if(selectedDish !=null){                
      var comments = selectedDish.comments
        }
        return ( 
          <div className="row">
            <div className="col-12 col-md-5 m-1">
              {this.renderDish(selectedDish)}
            </div>
            <div className="col-12 col-md-5 m-1">
              {this.renderComments(comments)}
            </div>          
          </div>         
        )
      }

    renderDish(selectedDish){      
      if (selectedDish != null){          
        return(          
            <Card>
              <CardImg  width="100%" src={selectedDish.image} alt={selectedDish.name} />             
              <CardBody>            
                  <CardTitle>{selectedDish.name}</CardTitle>                      
                  <CardText>{selectedDish.description}</CardText>                              
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

      renderComments(comments){   
        
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
        }// End if  
        else{
          return(
          <div>                  
          </div>
          );
        };
        
      }

}

export default DishDetail;