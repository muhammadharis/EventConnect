var mongoose = require('mongoose');
const router = express.Router();
var User = require("../../database/schema");

mongoose.connect('mongodb://muhammad:helloworld123@ds131932.mlab.com:31932/eventconnect');
mongoose.Promise = global.Promise;

router.get('/', (req, res) => {
    console.log(req);
});
