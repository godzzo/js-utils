/*
 */

'use strict'

const fs = require('fs');
const jsdom = require('jsdom');
const mustache = require('mustache');

const filePath = process.argv[2];

const full = LoadFile(filePath);

console.log(full);


function LoadFile(filePath, json) {
    const dom = ParseDOM(filePath);
    const $ = require('jquery')(dom.window);

    $('include').each( (idx, el) => {
        const src = $(el).attr('src');
        const data = $(el).attr('data');

        const jsonData = JsonFromFile (data);

        let content;

        if (Array.isArray(jsonData)) {
            const contents = [];

            for (const jsonItem of jsonData) {
                content = LoadFile(src, jsonItem);

                // content = ReplaceKeys(content, jsonItem);

                contents.push(content);
            }

            content = contents.join('\n');
        } else {
            content = LoadFile(src, jsonData);

            // content = ReplaceKeys(content, jsonData);
        }


        $(el).replaceWith(content);
    });

    let html = dom.serialize();

    html = ReplaceKeys(html, json);

    return html;
}

function ParseDOM(filePath) {
    const { JSDOM } = jsdom;

    const data = fs.readFileSync(filePath);

    const dom = new JSDOM(data);

    return dom;
}

function ReplaceKeys(content, jsonData) {
    if (jsonData) {

        const rendered = mustache.render(content, jsonData);
        
        return rendered;
    } else {

        return content;
    }
}

function JsonFromFile (filePath) {
    const text = fs.readFileSync(filePath).toString();
    let data = null;

    try {

        data = JSON.parse(text);
    } catch (e) {
        
        console.error(`Problem with file: ${filePath}`, e);

        throw e;
    }

    return data;
}
