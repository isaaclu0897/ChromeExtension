/*global chrome*/
'use strict';
var slice = Array.prototype.slice;
var manifest = chrome.runtime.getManifest();

function log(){
    var args = slice.call(arguments);
    var msg = args.shift();
    msg = "(%s) " + msg;
    args.unshift(manifest.version);
    args.unshift(msg);

    console.log.apply(console, args);
}

chrome.tabs.onCreated.addListener(function (tab) {
//    console.log(tab);
    if (tab.pendingUrl === "chrome://newtab/")
        chrome.tabs.update(tab.id, {url: "http://google.com"});
});

function init() {
    log("background.js: init()");
}

init();
