import express from 'express';
import expressGraphql from 'express-graphql';
import Schema from './schema/Schema.js';
import mongoose from 'mongoose';
import cors from 'cors';

const {graphqlHTTP} = expressGraphql;

const port = 5000;

const app = express();

app.use(cors());

const dbName = "Games-API";
const user = 'admingame';
const password = 'contraeña2';
const connectionString = `mongodb+srv://${user}:${password}@clustergame.7pbsg.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
.then(console.log('connected to games-db'))
.catch(error => console.log(`[Error]: ${error}`));

app.use('/graphql', graphqlHTTP({
    schema: Schema,
    graphiql: true
}));

app.listen(port, console.log(`listening at: http://localhost:${port}/graphql`));
