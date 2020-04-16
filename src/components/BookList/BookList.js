import React, { Component } from "react";
import { connect } from "react-redux";

class BookList extends Component {
  render() {
    return (
      <section>
        <h2>All Books</h2>
        <ul>
          {this.props.store.bookListReducer.map((book, index) => (
            <li key={index}>
              {book.title}, by {book.author}
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(BookList);
