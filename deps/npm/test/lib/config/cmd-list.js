const t = require('tap')
const cmdList = require('../../../lib/config/cmd-list.js')
// just snapshot it so we are made aware if it changes unexpectedly
t.matchSnapshot(cmdList)
