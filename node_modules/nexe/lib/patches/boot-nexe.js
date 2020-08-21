"use strict";
var fs = require('fs'), fd = fs.openSync(process.execPath, 'r'), stat = fs.statSync(process.execPath), footer = Buffer.alloc(32, 0);
fs.readSync(fd, footer, 0, 32, stat.size - 32);
if (!footer.slice(0, 16).equals(Buffer.from('<nexe~~sentinel>'))) {
    throw 'Invalid Nexe binary';
}
var contentSize = footer.readDoubleLE(16), resourceSize = footer.readDoubleLE(24), contentStart = stat.size - 32 - resourceSize - contentSize, resourceStart = contentStart + contentSize;
Object.defineProperty(process, '__nexe', (function () {
    var nexeHeader = null;
    return {
        get: function () {
            return nexeHeader;
        },
        set: function (value) {
            if (nexeHeader) {
                throw new Error('This property is readonly');
            }
            nexeHeader = Object.assign({}, value, {
                blobPath: process.execPath,
                layout: {
                    stat: stat,
                    contentSize: contentSize,
                    contentStart: contentStart,
                    resourceSize: resourceSize,
                    resourceStart: resourceStart
                }
            });
            Object.freeze(nexeHeader);
        },
        enumerable: false,
        configurable: false
    };
})());
var contentBuffer = Buffer.from(Array(contentSize)), Module = require('module');
fs.readSync(fd, contentBuffer, 0, contentSize, contentStart);
fs.closeSync(fd);
new Module(process.execPath, null)._compile(contentBuffer.toString(), process.execPath);
