import React, { Component } from 'react';
import PigCard from './PigCard.js';
//import pigImg from '../hog-imgs';


export default class PigContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pig: 'currentPig'
    };
  }
  setCurrentPig = (name) => {
    this.setState({
        pig: name
      })
  }//setCurrentPig
 generatePigCards(){
   let displayInfo = false
   const pigCards = this.props.allPigs.map((pig)=>
    <PigCard pig={pig} setCurrentPig={this.setCurrentPig} thisPig={this.state.pig}/>
   )
   return pigCards
 }//generatePigCards()


  render() {
    console.log(this.state.pig)
    return (
      <div>
        
        <ul>
          {this.generatePigCards()}
        </ul>
      </div>
    );
  }
}
