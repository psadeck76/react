import React from 'react';
import {  Route,Redirect, Switch } from 'react-router-dom'

import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import DishDetail from './DishdetailComponent';

import commentData from '../data/commentsData';
import dishData from '../data/dishData';
import promotionData from '../data/promotionData';
import leaderData from '../data/leaderData';

class MainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: dishData,
      comments: commentData,
      promotions: promotionData,
      leaders: leaderData
    }
  }
  onDishSelect(dish) {
      this.setState({ selectedDish: dish})
  }
  render() {
    const { dishes, promotions, comments, leaders} = this.state;
    console.log(leaders)
    function DishWithId({ match }) {
      return(
      <DishDetail dish={dishes.filter(dish => dish.id === parseInt(match.params.dishId, 10))[0]} 
        comments={comments.filter(comment => comment.dishId === parseInt(match.params.dishId,10))} />
      )
    }
    function HomePage ()  {
      return(
        <Home dishes={dishes.filter(dish => dish.featured)[0]} 
              comments={comments.filter(comment => comment.featured)[0]}
              promotions = {promotions.filter(promotion => promotion.featured)[0]}
              leaders={leaders.filter(leader => leader.featured)[0]}
              />)
    }
    return (
      <div>
       
        <Header />
        <Switch>
            <Route path='/home' component={HomePage} exact />
            <Route exact path='/menu' component={ () => <Menu dishes={this.state.dishes} />} />  
            <Route path='/contactus' component={Contact} />
            <Route path='/menu/:dishId' component={DishWithId}/>
            <Route path='/aboutus' component={() => <About  leaders={leaders}/>}  />
            <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default MainComponent;
