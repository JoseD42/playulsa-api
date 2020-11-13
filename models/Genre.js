import mongoose from 'mongoose';

const {Schema} = mongoose;

const GenreSchema = new Schema({
    genre: String
});

export default mongoose.model('Genre', GenreSchema);