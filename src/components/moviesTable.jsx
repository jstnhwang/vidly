import React, { Component } from "react";
import Table from "./common/table";
import Like from "./common/like";

class MoviesTable extends Component {
  columns = [
    { label: "Title", path: "title" },
    { label: "Genre", path: "genre.name" },
    { label: "Stock", path: "numberInStock" },
    { label: "Rate", path: "dailyRentalRate" },
    {
      key: "like",
      content: movie => <Like liked={!movie.liked} onClick={() => this.props.onLike(movie)} />
    },
    {
      key: "delete",
      content: movie => (
        <button className="btn btn-danger btn-sm" onClick={() => this.props.onDelete(movie)}>
          Delete
        </button>
      )
    }
  ];

  render() {
    const { movies, onSort, sortColumn } = this.props;
    return <Table columns={this.columns} data={movies} onSort={onSort} sortColumn={sortColumn} />;
  }
}

export default MoviesTable;
