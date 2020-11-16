import mongoose from 'mongoose';

const {Schema} = mongoose;

const GenreSchema = new Schema({
    name: String
});

export default mongoose.model('Genre', GenreSchema);