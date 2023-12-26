var mongoose = require( 'mongoose' );
var dbURI1 = 'mongodb://127.0.0.1/mekanbul'; 
var dbURI = 'mongodb+srv://behiyenilayogultekin:1.nilayunutma@cluster3.puwqsbj.mongodb.net/?retryWrites=true&w=majority'; 

mongoose.connect(dbURI);
mongoose.connection.on("connected", function () {
    console.log(dbURI+"veri tabanına bağlanıldı");
});
mongoose.connection.on("error", function (){
    console.log("bağlantı hatası");
});
mongoose.connection.on("disconnected", function(){
    console.log('Veritabanı sunucusundan bağlantı kesildi');
});
process.on("SIGINT",function() {
    mongoose.connection.close();
    console.log("bağlantı koptu");
    process.exit(0);
});
require("./venue");