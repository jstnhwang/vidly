import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";

function App() {
  return (
    <main className="container">
      <Switch>
        <Route path="/movies" component={Movies} />
        <Route path="/customers" component={Customers} />
        <Route path="/rentals" component={Rentals} />
        <Route path="/not-found" component={NotFound} />
        <Redirect from="/" exact to="/movies" />
        <Redirect to="/not-found" />
      </Switch>
    </main>
  );
}

export default App;
