import graphql from 'graphql';

import Game from '../models/Game.js';
import Genre from '../models/Genre.js';

import GenreType from './GenreType.js';
import GameType from './GameType.js';

const {GraphQLID, GraphQLObjectType, GraphQLList} = graphql;


const RootQueryType = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        //Obtener juego
        game: {
            type: GameType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                return Game.findById(args.id);
            }
        },
        //Obrtener lista
        games: {
            type: new GraphQLList(GameType),
            resolve(parent, args){
                return Game.find();
            }
        },
        getGamesByGroupId:{
            type: new GraphQLList(GameType),
            args: {groupId: {type: GraphQLID}},
            resolve(parent, args){
                return Game.find({genreId: args.groupId});
            }
        },
        genre: {
            type: GenreType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                return Genre.findById(args.id);
            }
        },
        genres: {
            type: new GraphQLList(GenreType),
            resolve(parent, args){
                return Genre.find();
            }
        },
    }   
});

export default RootQueryType;