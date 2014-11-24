
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

//connect to the MySQL
var mysql      = require('mysql');
var db = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : 'Devlab1!',
  database : 'test'
});

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//Routes
app.get('/', routes.index);
app.get('/users', user.list);
var about = require('./routes/about');
app.get('/about', about.about);

var account = require('./routes/account');
app.get('/account', account.account);
//End-Routes

//handlers

//data - test action for grid
app.get('/data', function(req, res){
    db.query("SELECT * FROM books", function(err, rows){
        if (err) console.log(err);

        res.send(rows);
    });
});

app.post('/data', function(req, res){
    var data = req.body;
    var mode = data["!nativeeditor_status"];
    var sid = data.gr_id;
    var tid = sid;

    var sales  = data.sales;
    var author = data.author;
    var title  = data.title;
    var price  = data.price;

    function update_response(err, result){
        if (err){
            console.log(err);
            mode = "error";
        }

        else if (mode == "inserted")
            tid = result.insertId;

        res.setHeader("Content-Type","text/xml");
        res.send("<data><action type='"+mode+"' sid='"+sid+"' tid='"+tid+"'/></data>");
    }

    if (mode == "updated")
        db.query("UPDATE books SET sales = ?, author = ?, title = ?, price = ? WHERE id = ?",
            [sales, author, title, price, sid],
            update_response);
    else if (mode == "inserted")
        db.query("INSERT INTO books(sales, author, title, price) VALUES (?,?,?,?)",
            [sales, author, title, price],
            update_response);
    else if (mode == "deleted")
        db.query("DELETE FROM books WHERE id = ?", [sid], update_response);
    else
        res.send("Not supported operation");
});



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
