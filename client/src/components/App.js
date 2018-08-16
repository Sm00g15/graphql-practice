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
        return (
          <ul>
            {data.getAllProjects.map(project => (
              <div key={project._id} className="row">
                <div className="col-8">
                  <img width={800} height={300} src="bitcoin.info.jpg" alt="" />
                </div>
                <div className="col-4">
                  <strong>
                    <h2>Bitcoin.info</h2>
                  </strong>
                </div>
              </div>
            ))}
          </ul>
        );
      }}
    </Query>
  </div>
);

export default App;
