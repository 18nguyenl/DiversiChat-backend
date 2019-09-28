const db = require("./db/firebase");
const express = require("express"); 
const app = express();
const bodyParser = require('body-parser'); 
const port = 4000;
const cors = require('cors')
const getRouter = require('./router/getRouters');
const postRouter = require('./router/postRouters');


app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use("/", getRouter);
app.use("/", postRouter);

app.listen(port, () => {
    console.log(`Express connected port ${port}`)
})


