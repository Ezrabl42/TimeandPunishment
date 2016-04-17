

var Message = require('./send_msg');


var judgment = function()
{
  var clientNum = "+1";
  var hasSinned = true;

  Message.send_msg(hasSinned,clientNum);

};
