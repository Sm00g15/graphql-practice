////////////////////////////////////////////////
////EXPRESS && DB SETUP
////////////////////////////////////////////////
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "variables.env" });
const Project = require("./models/Projects");
const User = require("./models/User");

////////////////////////////////////////////////
////GRAPHQL-EXPRESS MIDDLEWARE
///////////////////////////////////////////////
const { graphiqlExpress, graphqlExpress } = require("apollo-server-express");
const { makeExecutableSchema } = require("graphql-tools");
const { typeDefs } = require("./schema");
const { resolvers } = require("./resolvers");

//////////////////////////////////////////////
/////CREATE GRAPHQL SCHEMA
/////////////////////////////////////////////
const schema = makeExecutableSchema({ typeDefs, resolvers });

/////////////////////////////////////////////
/////INITIALIZE APP
/////////////////////////////////////////////
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB connected"))
  .catch(err => console.error(err));
const app = express();
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true
};
app.use(cors(corsOptions));

//////////////////////////////////////////////////
/// SETUP JWT AUTH MIDDLE WARE
//////////////////////////////////////////////////
app.use(async (req, res, next) => {
  const token = req.headers["authorization"];
  if (token !== "null") {
    try {
      const currentUser = await jwt.verify(token, process.env.SECRET);
      console.log(currentUser);
    } catch (err) {
      console.error(err);
    }
  }
  next();
});

/////////////////////////////////////////////////
// CONNECT SCHEMAS WITH GRAPHQL
/////////////////////////////////////////////////
app.use(
  "/graphiql",
  graphiqlExpress({
    endpointURL: "/graphql"
  })
);
app.use(
  "/graphql",
  bodyParser.json(),
  graphqlExpress({ schema, context: { Project, User } })
);
const PORT = process.env.PORT || 4444;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
