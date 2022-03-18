import Movie from "./schema/movies.js";
const resolvers = {
    Query: {
      async getMovies (parent, args) {
        return await Movie.find({});
      },
      async getMovie (parent, args) {
        return await Movie.findById(args.id);
      }
    },
    Mutation: {
      async addMovie (parent, args) {
        let movie = new Movie({
          name: args.name,
          producer: args.producer,
          rating: args.rating,
        });
        return await movie.save();
      },
      async updateMovie (parent, args) {
        if (!args.id) return;
          return await Movie.findOneAndUpdate(
           {
             _id: args.id
           },
           {
             $set: {
               name: args.name,
               producer: args.producer,
               rating: args.rating,
             }
           }, {new: true});
      },
      async deleteMovie (parent, args) {
        return await Movie.findOneAndRemove({_id: args.id})
      }
    }
  }

  export default resolvers;