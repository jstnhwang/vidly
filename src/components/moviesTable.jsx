import React, { Component } from "react";
import TableHeader from "./common/tableHeader";
import Like from "./common/like";

class MoviesTable extends Component {
  columns = [
    { label: "Title", path: "title" },
    { label: "Genre", path: "genre.name" },
    { label: "Stock", path: "numberInStock" },
    { label: "Rate", path: "dailyRentalRate" },
    { key: "like" },
    { key: "delete" }
  ];

  render() {
    const { movies, onLike, onDelete, onSort, sortColumn } = this.props;

    return (
      <table className="table table-striped">
        <TableHeader columns={this.columns} sortColumn={sortColumn} onSort={onSort} />
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
                  onClick={() => onDelete(movie)}
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
