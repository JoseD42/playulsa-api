import graphql from 'graphql';
import Genre from '../models/Genre.js';
import GenreType from './GenreType.js';

const {GraphQLID, GraphQLString, GraphQLObjectType} = graphql;

const GameType = new GraphQLObjectType({
    name: 'Game',
    fields: ()=>({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        author:{type: GraphQLString},
        image:{type: GraphQLString},
        description:{type: GraphQLString},
        Genre: {
            type: GenreType,
            resolve(parent, args){
                return Genre.findById(parent.genreId);
            }
        }
    })
});

export default GameType;