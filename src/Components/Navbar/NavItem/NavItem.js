import React, {Component} from "react";
import './NavItem.css';

class NavItem extends Component {
  render() {
    return (
      <h1 className="NavItem">{this.props.children}</h1>
    );
  }
}

export default NavItem;
