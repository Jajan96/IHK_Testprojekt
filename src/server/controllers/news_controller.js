var mysql = require('mysql');

// First you need to create a connection to the db
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "pfadfinder_meinolf"
});

module.exports.create = function(req, res){
	
}


module.exports.update = function(req, res){
	
}


module.exports.list = function(req, res){
	con.query('select n.id, n.title, n.content, n.creationDate, n.lastModifiedDate, n.user_username username, tag.title tag_name from Newsentries as n left join Tags tag on (n.tag_id=tag.id)', function(err, rows){
       if(err){}
       //res.sendStatus(200);
       res.json(rows);
       console.log(rows);
    });
}


module.exports.single = function(req, res){
	con.query('SELECT * FROM Newsentries WHERE id=' + req.params.id + '', function(err, rows){
        if(err){}
        if(Object.keys(rows).length == 0){
            res.sendStatus(404);
        }
        res.json(rows[0]);
        console.log(rows[0]);
    });
}


module.exports.delete = function(req, res){
	
}