function send_msg(hasSinned,num)
{
    var clientNum = num;

    if(hasSinned == true)
    {
        // Twilio Credentials
        var accountSid = 'AC9cb50a12960609d0a072dc80bc683e66'; //MY Twilio Acct. Credentials
        var authToken = 'a61ab3beec233d00d207f7d59f6bdd0e';
        //require the Twilio module and create a REST client
        var client = require('twilio')(accountSid, authToken);



        //######################ARRAY GOES HERE################################

        var punArray = [];

        for(var i = 0; i < 1; i++)
        {
            client.messages.create(
                {
                //the fields for the message follow
                to: clientNum,
                from: "+17329554906",
                body: "The cow is in the weed farm.  The steaks have never been higher.",
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
}


module.exports.send_msg = send_msg;
