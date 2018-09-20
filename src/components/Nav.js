import piggy from '../porco.png'
import React from 'react'

const Nav = (props) => {


	return (
		<div className="navWrapper">
			<span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
				<a href="https://www.lowes.com/pd/LG-24-7-cu-ft-French-Door-Refrigerator-with-Ice-Maker-Stainless-steel/4746231">
					<img src={piggy} className="App-logo" alt="piggy" />
				</a>
			</div>
			<span className="normalText">A React App for County Fair Hog Fans</span>
			<br></br>
				<div className="field"><br></br>
				<label>Sort By:</label>
					<select name="type" id="type" onChange={props.setFilter}>
						<option value="all">All</option>
						<option value="name">Name</option>
						<option value="weight">Weight</option>
					</select>
				<button name="greased" onClick={props.toggleGreased}>{ props.currentlyGreased ? 'All' : 'Greased'}</button>


				</div>
		</div>
	)
}

export default Nav
