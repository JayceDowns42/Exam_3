const jsonfile = require('jsonfile');

const file = '/tmp/data.json';

jsonfile.readFile("data.json", function (err, obj) {

  for (let i = 0; i < obj.items.length; i++) {
    age = obj.items[i].age;
    fName= obj.items[i].fname;
    console.log(fName + " " + age);
  }
})