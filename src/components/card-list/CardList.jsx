import React, { Component } from "react";
import CardContainer from "../card-container/CardContainer";
import "./cardList.css";

export default class CardList extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <CardContainer monster={monster} key={monster.id} />;
        })}
      </div>
    );
  }
}