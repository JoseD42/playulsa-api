import graphql from 'graphql';
import GameType from './GameType.js';
import Game from '../models/Game.js';

const {GraphQLID, GraphQLString, GraphQLObjectType, GraphQLList} = graphql;


const GenreType = new GraphQLObjectType({
    name: 'Genre',
    fields: ()=>({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        
        games: {
            type: new GraphQLList(GameType),
            resolve(parent, args){
                return Game.find({genreId: parent.id});
            }
        }
    })
});

export default GenreType;