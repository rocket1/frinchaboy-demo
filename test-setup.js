const {JSDOM} = require('jsdom');

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const {window} = jsdom;

function copyProps(src, target) {
    const props = Object.getOwnPropertyNames(src)
        .filter(prop => typeof target[prop] === 'undefined')
        .reduce((result, prop) => () => {
            const r = Object.assign({}, result);
            return ({
                r,
                [prop]: Object.getOwnPropertyDescriptor(src, prop),
            })
        }, {});
    Object.defineProperties(target, props);
}

global.window = window;
global.document = window.document;
global.navigator = {
    userAgent: 'node.js',
};
global.Image = window.Image;
global.HTMLElement = window.HTMLElement;
global.getComputedStyle = window.getComputedStyle;

copyProps(window, global);
