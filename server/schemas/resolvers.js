const resolvers = {
  Query: {
    users: async (parent, args, context, info) => {
      try {
        const users = await User.find();
        return users;
      } catch (err) {
        console.error(err);
        return [];
      }
    },
    user: async (parent, args, context, info) => {
      try {
        const user = await User.findById(args.id);
        return user;
      } catch (err) {
        console.error(err);
        return null;
      }
    }
  },
  Mutation: {
    createUser: async (parent, args, context, info) => {
      try {
        const user = await User.create(args);
        return user;
      } catch (err) {
        console.error(err);
        return null;
      }
    },
    updateUser: async (parent, args, context, info) => {
      try {
        const user = await User.findByIdAndUpdate(args.id, args, { new: true });
        return user;
      } catch (err) {
        console.error(err);
        return null;
      }
    },
    deleteUser: async (parent, args, context, info) => {
      try {
        const user = await User.findByIdAndDelete(args.id);
        return user;
      } catch (err) {
        console.error(err);
        return null;
      }
    }
  }
};
