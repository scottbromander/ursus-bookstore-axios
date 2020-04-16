import React, { Component } from "react";

import BookList from "../BookList/BookList";
import BookForm from "../BookForm/BookForm";

import "./App.css";

import axios from "axios";
import { connect } from "react-redux";

class App extends Component {
  // TODO - GET Book List from server

  componentDidMount() {
    this.getBookList();
  }

  getBookList = () => {
    axios
      .get("/books")
      .then((response) => {
        console.log(response.data);
        this.props.dispatch({ type: "SET_BOOK_LIST", payload: response.data });
      })
      .catch((err) => console.warn(err));
  };

  render() {
    return (
      <div className="App">
        <header>
          <h1>Books w/ Redux!</h1>
        </header>
        <main>
          <BookForm getBookList={this.getBookList} />
          <BookList />
        </main>
      </div>
    );
  }
}

export default connect()(App);
