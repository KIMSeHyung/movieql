import {
    getMovies,
    getById,
    addMovie,
    deleteMovie
} from "./db";

import {
    getApiMovies
} from './movie-db'

const resolvers = {
    Query: {
        movies: () => getMovies(),
        movie: (_, {
            id
        }) => getById(id),
        apiMovies: (_, {limit, rating}) => getApiMovies(limit, rating)
    },
    Mutation: {
        addMovie: (_, {
            name,
            score
        }) => addMovie(name, score),
        deleteMovie: (_, {
            id
        }) => deleteMovie(id)
    }
};

export default resolvers;