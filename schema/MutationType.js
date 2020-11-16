import graphql from 'graphql';
import Game from '../models/Game.js';

import GenreType from './GenreType.js';
import GameType from './GameType.js';
import Genre from '../models/Genre.js';


const {GraphQLID, GraphQLString, GraphQLObjectType} = graphql;


const MutationType = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        //game
        addGame: {
            type: GameType,
            args: {
                name: {type: GraphQLString},
                author: {type: GraphQLString},
                image:{type: GraphQLString},
                description: {type: GraphQLString},
                genreId: {type: GraphQLID}
            },
            resolve(parent, args){
                let game = new Game(args);
                return game.save();
            }
        },
        editGame: {
            type: GameType,
            args:{
                id: {type: GraphQLID},
                name: {type: GraphQLString},
                author:{type: GraphQLString},
                image:{type: GraphQLString},
                description:{type: GraphQLString},
                genreId: {type: GraphQLID}
            },
            resolve(parent, args){

                return Game.findByIdAndUpdate(args.id, args);
            }
        },
        deleteGame: {
            type: GameType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                return Game.findByIdAndRemove(args.id);
            }
        },
        //genre
        addGenre: {
            type: GenreType,
            args: {
                name: {type: GraphQLString}
            },
            resolve(parent, args){
                const genre = new Genre(args);
                return genre.save();
            }
        },
        editGenre: {
            type: GenreType,
            args: {
                id: {type: GraphQLID},
                name: {type: GraphQLString}
            },
            resolve(parent, args){

                return Genre.findByIdAndUpdate(args.id, args);
            }
        },
        deleteGenre: {
            type: GenreType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                return Genre.findByIdAndRemove(args.id);
            }
        },
    }
});

export default MutationType;