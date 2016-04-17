/*console.log("time",time);
      console.log("phoneNumber", phoneNumber);
      
      
      */

function send_msg(phoneNumber, hasSinned){
    //Enter number
    var clientNum = "+17326750825";
    var hasSinned = true;
    var pun = "There's nothing here.";
    var msgCount = 3;

    // Twilio Credentials
    var accountSid = 'AC9cb50a12960609d0a072dc80bc683e66'; //MY Twilio Acct. Credentials
    var authToken = 'a61ab3beec233d00d207f7d59f6bdd0e';
    //require the Twilio module and create a REST client

    var twilio = require('twilio');
    var client = new twilio.RestClient(accountSid, authToken);
    //######################ARRAY GOES HERE################################
    if(hasSinned == true)
    {

        var punArray = [
        "You deserve ATROPHY, because you are FIRST PRIZE in LAZINESS.",
        "You put the PRO in PROCRASINATION.",
        "You must FACE the BOOK in order for YOUTUBE be successful, you TWITT.(ER!!!!!)",
        "You need glasses because you have no focus.  Thought this was a bad pun?  Well, like you, this pun is LAZY.",
        "The AC is in your room, and the T is in the kitchen.  Now get your ACT together.",
        "It's not my loss, it's yours.  That's why it's called a FAIL-YOUR."
        ];
        var j = Math.floor(Math.random() * 100) % 6;


        pun = punArray[j];
        for(var i = 0; i < msgCount; i++)
        {
            client.messages.create(
                {
                //the fields for the message follow
                to: clientNum,
                from: "+17329554906",
                body: pun
                //no media url for now
                },
                function(err, message)
                {
                    if (!err)
                    {
                        console.log('Success! The SID for this SMS message is:');
                        console.log(message.sid);
                        console.log('Message sent on:');
                        console.log(message.dateCreated);
                    }
                    else
                    {
                    console.log(err.message);
                    }
                });
        };
        return;
    }
    else if(hasSinned == false)
    {
      client.messages.create(
          {
          //the fields for the message follow
          to: clientNum,
          from: "+17329554906",
          body: "Excellent work, keep it up! :^)",
          mediaUrl: "http://mrwgifs.com/wp-content/uploads/2014/11/Zach-Galifianakis-Gives-a-Happy-Thumbs-Up-As-He-Speeds-In-a-Convertible-On-The-Freeway.gif",
          },
          function(err, message)
          {
              if (!err)
              {
                  console.log('Success! The SID for this SMS message is:');
                  console.log(message.sid);
                  console.log('Message sent on:');
                  console.log(message.dateCreated);
              }
              else
              {
              console.log(err.message);
              }
          });
    }
}



document.addEventListener('DOMContentLoaded', function() {
  
  console.log("DOM CONTENT LOADED");

  var checkPageButton = document.getElementById("buttonclick");
    checkPageButton.addEventListener("click", function() {

    console.log("BUTTON CLICKED");

    d = document;
    var CONFIG = true;
    var phoneNumber = "+1"+d.getElementById("phone_value").value;
    var time = Number(d.getElementById("timer_value").value);
    var hasSinned = false;
    var re = [/facebook/gi,/twitter/gi,/youtube/gi];

      var date = new Date();
      var alarmStartTime = date.getTime();
      if (CONFIG == true)
        send_msg(phoneNumber, hasSinned);
      console.log("ALARM STARTED");
      chrome.alarms.create("alarm",{delayInMinutes: Number(time) } );

      chrome.alarms.onAlarm.addListener(function ()
      {
        console.log("ALARM ENDED");
          //background listener
          var endDate = new Date();
          chrome.history.search({text: "",startTime:alarmStartTime, endTime: endDate.getTime()}, function(data)
        {
          
          data.forEach(function(page){
            re.forEach(function(sinWord){
              if (page.url.search(sinWord) != -1){
                hasSinned = true;
              }
            })
            console.log(page.url);
          });
          
        });

        send_msg(phoneNumber, hasSinned)

      });

  }); 
});