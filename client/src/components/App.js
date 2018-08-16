import React from "react";
import "./App.css";
import { Query } from "react-apollo";
import { GET_ALL_PROJECTS } from "../queries/";

const App = () => (
  <div className="App">
    <Query query={GET_ALL_PROJECTS}>
      {({ data, loading, error }) => {
        if (loading) return <div>Loading</div>;
        if (error) return <div>Error</div>;
        console.log(data);
        return <p>Welcome</p>;
      }}
    </Query>
  </div>
);

export default App;
