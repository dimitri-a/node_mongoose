var express = require('express');
console.log('before connection');

var mongoose = require('mongoose');
var db = mongoose.connect('localhost', 'vandaag');

console.log(db.connection);

var schema = mongoose.Schema({ name: 'string' });
var Cat = db.model('Cat', schema);

var kitty = new Cat({ name: 'dfgfdgdf' });
kitty.save(function (err) {
    if (err) // ...
        console.log('meow');
});
