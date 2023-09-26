
const mongodb = require('mongoose');

mongodb.connect('mongodb+srv://nikkuchouhan250:3hOXoWK8Wt8HWu7g@cluster0.xf4nj5w.mongodb.net/?retryWrites=true&w=majority');

const connectParams = {
    useNewUrlParser:true,
    useUnifiedTopology:true
}

const db = mongodb.connection ;

db.on('error', console.error.bind(console, 'error connecting to database'));

db.once('open', ()=>{
    console.log("connected to database : mongoDB");
});

module.exports = mongodb ;