import mongoose from 'mongoose';

const {Schema} = mongoose;

const GameSchema = new Schema({
    name: String,
    author: String,
    image: String,
    description: String,
    genreId: String
});

export default mongoose.model('Game', GameSchema);