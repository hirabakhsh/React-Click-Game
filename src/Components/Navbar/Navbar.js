import React, {Component} from "react";
import NavItem from "./NavItem";
import NavItemState from "./NavItemState";
import './Navbar.css';


class Navbar extends Component {
  render () {
    return(
      <div className="Navbar">
        <NavItem>Memory Game</NavItem>
        <NavItem>Click An Image To Start</NavItem>
        <NavItemState score={this.props.score} total={this.props.total}/>
      </div>
    );
  }
}
export default Navbar;
