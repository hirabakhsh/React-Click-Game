import React, {Component} from "react";
import ImageCard from "../ImageCard";
import "./Gallery.css";
import Navbar from "../Navbar";
import NavItemState from "../Navbar";
import cards from "../../cards.json";

class Gallery extends Component {

  constructor(props) {
    super(props);
    this.state = {
      order: [{index:0, clicked:false},
              {index:1, clicked:false},
              {index:2, clicked:false},
              {index:3, clicked:false},
              {index:4, clicked:false},
              {index:5, clicked:false},
              {index:6, clicked:false},
              {index:7, clicked:false},
              {index:8, clicked:false},
              {index:9, clicked:false},
              {index:10, clicked:false},
              {index:11, clicked:false}],
      score: 0,
      total: 12
    };
  }

  handleClick = (event) => {
    console.log(event);

    if (!event.clicked && this.state.score != this.state.total) {
      event.clicked = true;
      this.setState({score: this.state.score + 1});
    } else if (event.clicked){
      this.setState({
        order: [{index:0, clicked:false},
                {index:1, clicked:false},
                {index:2, clicked:false},
                {index:3, clicked:false},
                {index:4, clicked:false},
                {index:5, clicked:false},
                {index:6, clicked:false},
                {index:7, clicked:false},
                {index:8, clicked:false},
                {index:9, clicked:false},
                {index:10, clicked:false},
                {index:11, clicked:false}],
        score: 0,
        total: 12
      });
    }

    let a = this.state.order;
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    this.setState({order: a});
  };

  render() {
    return (
      <div className="wrapper">
        <Navbar score={this.state.score} total={cards.length}/>
        <div className="Gallery">
          {
            this.state.order.map(
              function(item) {
                let img = cards[item.index].image;
                return <ImageCard click={() => this.handleClick(item)} image={img} id={item.idex} key={item.index}  />;
              }.bind(this)
            )
          }
        </div>
      </div>
    );
  }
}

export default Gallery ;
