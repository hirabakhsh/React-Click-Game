import React, {Component} from "react";
import '../NavItem/NavItem.css';

class NavItemState extends Component {

  render() {
    return (
      <h1 className="NavItem">{this.props.score} of {this.props.total} correct</h1>
    );
  }
}

export default NavItemState;
