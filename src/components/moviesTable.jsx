import React, { Component } from "react";
import Like from "./common/like";

class MoviesTable extends Component {
  render() {
    const { movies, onLike, onDelete, onSort } = this.props;

    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th onClick={() => onSort("title")}>Title</th>
            <th onClick={() => onSort("genre.name")}>Genre</th>
            <th onClick={() => onSort("numberInStock")}>Stock</th>
            <th onClick={() => onSort("dailyRentalRate")}>Rate</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {movies.map(movie => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like liked={!movie.liked} onClick={() => onLike(movie)} />
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger btn-sm"
                  onClick={() => onDelete(movie._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default MoviesTable;
