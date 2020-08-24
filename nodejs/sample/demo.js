// using third party modules
var _ = require('lodash');
console.log(_.random(1, 100));


// File system
var fs = require('fs');
fs.readFile('./data.json', 'utf-8', (err, data)=>{
    // convert string into json
    var data = JSON.parse(data);
    console.log(data.name);
});

fs.readdir('/home/ma.kumar1/JSProjects/', (err, data)=>{
    console.log(data);
});

var data_1 = {
    name: 'Bob'
}

fs.writeFile('sample/demo.json', JSON.stringify(data_1));