const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const createToken = (user, secret, expiresIn) => {
  const { username, email } = user;
  return jwt.sign({ username, email }, secret, { expiresIn });
};

exports.resolvers = {
  Query: {
    getAllProjects: async (root, args, { Project }) => {
      const allProjects = await Project.find();
      return allProjects;
    },
    getCurrentUser: async (root, args, { currentUser, User }) => {
      if (!currentUser) {
        return null;
      }
      const user = await User.findOne({
        username: currentUser.username
      }).populate({ path: "projects", model: "Project" });
      return user;
    }
  },

  Mutation: {
    addProject: async (root, { name, category, description }, { Project }) => {
      const newProject = await new Project({
        name,
        category,
        description
      }).save();
      return newProject;
    },

    signinUser: async (root, { username, password }, { User }) => {
      const user = await User.findOne({ username });
      if (!user) {
        throw new Error("You are not a user, Sign Up first!");
      }
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        throw new Error("Invalid Password");
      }
      return {
        token: createToken(user, process.env.SECRET, "1hr")
      };
    },

    signupUser: async (root, { username, email, password }, { User }) => {
      const user = await User.findOne({ username });
      if (user) {
        throw new Error("User already exists");
      }
      const newUser = await new User({
        username,
        email,
        password
      }).save();
      return {
        token: createToken(newUser, process.env.SECRET, "1hr")
      };
    }
  }
};
