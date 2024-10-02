// resolver.js
const Name = require('../models/model');

const resolvers = {
    Query: {
        getNames: async () => {
            return await Name.find({});
        },
    },
    Mutation: {
        addName: async (_, { name }) => {
            const newName = new Name({ name });
            await newName.save();
            return newName;
        },
    },
};

module.exports = resolvers;
