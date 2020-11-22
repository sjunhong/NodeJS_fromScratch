const { fstat } = require("fs");
const fs = require('fs');

var template = {
    html: function(title, list, body, control){
        return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <h2><a href="/">Main</a></h2>
            ${list}
            <h3>${title}</h3>
            ${control}
            ${body}
        </body>
        </html>
        `
    },
    list: function(fileList){
        var tempList = '<ul>';
        for(var item in fileList){
            var temp = `<li><a href="/?id=${fileList[item]}">${fileList[item]}</a></li>`;
            tempList += temp;
        }
        tempList += '</ul>';
        return tempList;
    }
}



module.exports = template;