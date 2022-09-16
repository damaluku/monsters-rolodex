import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/CardList";
import SearchBox from "./components/search-box/SearchBox";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
      title: "Monsters Project",
    };
    // console.log("constructor called");
  }

  componentDidMount() {
    // console.log("componentDidMount called");

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) =>
        this.setState(
          () => {
            return { monsters: data };
          },
          () => {
            // console.log(this.state);
          }
        )
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField };
    });
  };

  onTitleChange = (event) => {
    const title = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { title };
    });
  };

  render() {
    // console.log("render called");

    const { monsters, searchField, title } = this.state;
    const { onSearchChange, onTitleChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className="app-title">{title}</h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="Search Monster..."
          className="search-box"
        />

        <SearchBox
          onChangeHandler={onTitleChange}
          placeholder="Search Title..."
          className="search-box"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
