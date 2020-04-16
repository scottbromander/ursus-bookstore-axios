import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

class BookForm extends Component {
  state = {
    newBook: {
      title: "",
      author: "",
    },
  };

  handleChangeFor = (propertyName) => (event) => {
    this.setState({
      newBook: {
        ...this.state.newBook,
        [propertyName]: event.target.value,
      },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Adding book`, this.state.newBook);
    // TODO - axios request to server to add book
    axios
      .post("/books", this.state.newBook)
      .then((response) => {
        console.log(response.data);
        this.props.getBookList();
      })
      .catch((err) => console.warn(err));
  };

  render() {
    return (
      <section>
        <h2>Add Book</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            required
            placeholder="Title"
            value={this.state.newBook.title}
            onChange={this.handleChangeFor("title")}
          />

          <input
            required
            placeholder="Author"
            value={this.state.newBook.author}
            onChange={this.handleChangeFor("author")}
          />
          <br />
          <button type="submit">Add Book</button>
        </form>
      </section>
    );
  }
}

export default connect()(BookForm);
