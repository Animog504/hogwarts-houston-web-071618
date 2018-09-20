import React, { Component } from 'react';
import '../App.css';

export default class PigCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
  }//constructor

  pigClickHandler = (e) => {
      this.props.setCurrentPig(this.props.pig.name)
  }//pigClickHandler

  // info = () =>{
  //   return
  //       <React.Fragment>
  //         <p>specialty: {this.props.pig.specialty}</p>
  //         <p>greased: {this.props.pig.greased?"greased":"not-greased"}</p>
  //         <p>wtf: {this.props.pig['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
  //         <p>Highest Honor: {this.props.pig['highest medal achieved']}</p>
  //       </React.Fragment>
  // } //complain to Josh profusely about this


  render() {
    let pigStuff = <div>
      <p>specialty: {this.props.pig.specialty}</p>
      <p>greased: {this.props.pig.greased?"greased":"not-greased"}</p>
      <p>wtf: {this.props.pig['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
      <p>Highest Honor: {this.props.pig['highest medal achieved']}</p>
    </div>
    return (
      <li className="pigTile" onClick={this.pigClickHandler}>
        <h3>{this.props.pig.name}</h3>
        <img src={require(`../hog-imgs/${this.props.pig.name.replace(/ /g,"_").toLowerCase()}.jpg`)} />
        {this.props.thisPig === this.props.pig.name ? pigStuff : null}
      </li>
    );
  }
}
