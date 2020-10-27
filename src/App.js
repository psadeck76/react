import React, { Component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes'

class App extends Component{

  constructor(props){
    super(props);
  
    // This was 'lifted' from dishes.js so it can be availabe to all children
    this.state= {
      dishes: DISHES
    };
  }

  render(){
    return(
    <div className="App">
      <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        {/* < Menu /> */}
        {/* This will pass the dishes(props) into the MenuComponent/Menu class */}
        {/* The dishes are available as props within the MenuComponent*/}
        {/* and can be accessed as this.props.dishes */}
        <Menu dishes={this.state.dishes} />
    </div>
    );
  }
}

export default App;