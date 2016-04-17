

var Message = require('./send_msg');


var judgment = function()
{
  var clientNum = "+19082178884";
  var hasSinned = true;

  Message.send_msg(hasSinned,clientNum);

};
judgment();
