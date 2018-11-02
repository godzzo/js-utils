
'use strict'

var fs = require('fs');

function jsonFromFile (filePath) {
    const text = fs.readFileSync(filePath).toString();

    return JSON.parse(text);
}

function jsonToFile (filePath, obj) {
    fs.writeFileSync(filePath, JSON.stringify(obj));
}

function writeFile (filePath, text) {
    fs.writeFileSync(filePath, text);
}

function logJson (msg, obj) {
    console.log(msg, JSON.stringify(obj, null, 4));
}

function formatDate (value) {
    console.log(`DATE VALUE: ${value}`);

    if (!value || value.trim().length < 2) {
        value = "1801-01-01";
    }

    if (value.length == 8) {
        value += "01";
    }

    if (value.length > 10) {
        value = value.substring(0, 10);
    }

    return value;
}

function GetObjItem (obj, path) {
    if (path) {
        const tags = path.split(/\./g);
        let val = obj;
    
        for (const tag of tags) {
            val = val[tag];
        }
    
        return val;

    } else {
        return obj;
    }
}

function ParseToNum (text) {
    let parsed = NaN;
    let replaced;

    if (text && text.replace) {
        replaced = text.replace('cm3','');
        replaced = replaced.replace(/\D/g,'');//cm3 eseten ott marad a 3-as
    
        parsed = parseInt(replaced);
    }

    if (isNaN(parsed) || typeof(parsed) != "number") {
        parsed = 0;
    }

    return parsed;
}
  
function NormalizeText (text) {
    text = text.replace(/ /g,'_');
    text = text.replace(/[/]/g,'_');
    
    text = text.toLowerCase();

    text = text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    return text;
}

module.exports = {
    jsonFromFile: jsonFromFile,
    jsonToFile: jsonToFile,
    writeFile: writeFile,
    logJson: logJson,
    formatDate: formatDate,
    ParseToNum: ParseToNum,
    NormalizeText: NormalizeText
};
