import { writable } from 'svelte/store';

export const md = writable("");
export const prev = writable("");
var showdown  = require('showdown');

var converter = new showdown.Converter();
const unsubscribe = md.subscribe(value => {
    var html = converter.makeHtml(value);
    prev.set(html)
    console.log(html)
});