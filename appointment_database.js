const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://peyman:iraniran1394@dbserver.lven6.mongodb.net/?retryWrites=true&w=majority";
const url = "mongodb+srv://peyman:iraniran1394@dbserver.lven6.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  
});

 //Creating the collection 
//  MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   dbo.createCollection("customers", function(err, res) {
//     if (err) throw err;
//     console.log("Collection created!");
    
//   });
// });


MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = { name: "Peyman", make: "", model:"", year:"", trans:"", engine:"", fuel:"" };
  dbo.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});

// inserting data in the collection

  