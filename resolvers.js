exports.resolvers = {
  Query: {
    getAllProjects: async (root, args, { Project }) => {
      const allProjects = await Project.find();
      return allProjects;
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
    }
  }
};
