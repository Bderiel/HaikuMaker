const gen = require('./haiku_generator');
DictObj = gen();

function add(arr){
    return arr.reduce((a, b) => a + b, 0);
  }
function random(n){
    let arr = [];
    while (add(arr) != n){
      let g = Math.floor(Math.random() * n) + 1 ;
      arr.push(g);
      if (add(arr) > n)arr = [];

    }
    return arr;
  }
  let line1 = random(5);
  let line2 = random(7);
  let line3 = random(5);

  function haiku(arr){
    output = '';
    for (let i = 0;i < arr.length;i++){
      let ran = Math.floor(Math.random() * DictObj[arr[i]].length);
      output += DictObj[arr[i]][ran].split(' ')[0] + ' ';
    }
    return output.replace(/[^a-z\s]/ig, '');
  }
// or module.exports.createHaiku = createHaiku sane as adding to global object
console.log(haiku(line1));
console.log(haiku(line2));
console.log(haiku(line3));
