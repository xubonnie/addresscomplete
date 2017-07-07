const express = require('express');
const app = express();
const path = require('path');

// getting external CSS, JavaScript and images (default folder)
// ex. img(src="img/dog.png", alt="woof") would show /public/img/dog.png
app.use(express.static(path.join(__dirname, 'public')));

// Initialize router
const router = express.Router();
app.use(router);

// Setting Jade UI
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

router.get('/', (req, res) => {
  res.render('form');
});

app.post('/', function(req,res){
  console.log(req.body);
});

app.listen(8000, () => {
  console.log('Listening on 8000');
});

module.exports = app;
