const fs = require('fs');
const cmuDictBuffer = fs.readFileSync('./cmudict.txt');
let cmuDictRaw = cmuDictBuffer.toString();


let test = cmuDictRaw.split('\n');
const generateTable = function(){ //generateTable() {
    const DictObj = {
        0: [],
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
        7: []
    };
    const index = '0123456789';
    for (let i = 0; i < test.length; i++) {
        let counter = 0;
        for (let j = 0; j < test[i].length; j++) {
            if (index.indexOf(test[i][j]) !== -1) {
                counter++;
            }
        }
        if (counter <= 7) DictObj[counter].push(test[i]);
    }
return DictObj;
};

module.exports = generateTable;
