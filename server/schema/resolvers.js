import {
    UserList, MovieList
} from "../FakeData.js"

const resolvers = {
    Query: {
        // USER RESOLVERS
        users: () => {
            return UserList
        },
        user: (parent, args) => {
            const id = args.id
            const user = UserList.find(user => user.id === id)
            return user;
        },

        // MOVIE RESOLVERS
        movies: () => {
            return MovieList
        },
        movie: (parent, args) => {
            const name = args.name
            const movie = MovieList.find(movie => movie.name === name)
            return movie
        }
    },
    User: {
        favoriteMovies: () => {
            return MovieList.filter(movie => movie.yearOfPublication >= 2000 && movie.yearOfPublication <=2023)
        }
    },

    Mutation: {
        createUser: (parent, args) => {
            const user = args.input;
            const lastId = UserList[UserList.length - 1].id;
            user.id = lastId + 1;
            UserList.push(user);
            return user;
        },

        updateUsername: (parent, args) => {
            const { id, newUsername } = args.input;
            let userUpdated;
            UserList.forEach((user) => {
                if (user.id === Number(id)) {
                    user.username = newUsername;
                    userUpdated = user;
                }
            });

            return userUpdated;
        },

        deleteUser: (parent, args) => {
            const id = args.id;
            UserList.filter(user => user.id !== id)
            return null;
        },
    }
}

export default resolvers