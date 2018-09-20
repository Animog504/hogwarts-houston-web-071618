import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import PigContainer from './PigContainer';

class App extends Component {
  state = {
    allPigs: hogs
  }
  toggleGreased=() =>{
    // this.setState({
    //   allPigs: something
    // })
    let currentlyGreased = !this.state.currentlyGreased
    let allPigs = hogs
    console.log("IMA GREASEBOI!")
    if(currentlyGreased) allPigs = hogs.filter(hog => hog.greased)

    this.setState({
      currentlyGreased,
      allPigs
    })
  }//setGreased
  setFilter = (e) => {
    console.log(e.target.value)
    let pigs = hogs
    switch(e.target.value){

    case 'weight':
      pigs = hogs.sort( (hog1, hog2) => {
        if(hog1.weight < hog2.weight){
          return -1
        } else if(hog1.weight > hog2.weight) {
          return 1
        } else {
          return 0
        }
      })
      break;
    case 'name':

      break;
    default:
      pigs = hogs
    }//switch

    //setState
    this.setState({ currentFilter: e.target.value})
  }//setFilter

  render() {
    return (
      <div className="App">
          < Nav toggleGreased={this.toggleGreased} setFilter={this.setFilter} currentlyGreased={this.state.currentlyGreased}/>
          < PigContainer allPigs={this.state.allPigs}/>
      </div>
    )
  }
}

export default App;
