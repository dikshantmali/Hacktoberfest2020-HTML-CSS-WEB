[<img src="/node_banner.jpg">](https://developer.telesign.com)
[<img src="https://img.shields.io/travis/TeleSign/node_telesign.svg">](https://travis-ci.org/TeleSign/node_telesign) [<img src="https://img.shields.io/codecov/c/github/TeleSign/node_telesign.svg">](https://codecov.io/gh/TeleSign/node_telesign) [![npm](https://img.shields.io/npm/v/telesignsdk.svg)](https://www.npmjs.com/package/telesignsdk) [![npm](https://img.shields.io/npm/l/telesignsdk.svg)](https://github.com/TeleSign/node_telesign/blob/master/LICENSE.txt)  

TeleSign Node.js SDK
=================

TeleSign is a communications platform as a service (CPaaS) company, founded on security. Since 2005, TeleSign has
been a trusted partner to the world’s leading websites and mobile applications, helping secure billions of end-user
accounts. Today, TeleSign’s data-driven, cloud communications platform is changing the way businesses engage with
customers and prevent fraud.

For more information about TeleSign, visit our [website](http://www.TeleSign.com>).


Documentation
-------------

Code documentation is included in the SDK. Complete documentation, quick start guides and reference material
for the TeleSign API is available within the [TeleSign Standard Documentation](https://standard.telesign.com/).


Installation
------------

To add the TeleSign Node.js SDK using NPM to your Node.js project:

```
npm install telesignsdk -save
```

If you have already cloned this SDK, you can using the following command
```
npm install /path/to/sdk -save
```

Node.js **6+** is required for the TeleSign Node.js SDK.

Authentication
--------------

You will need a Customer ID and API Key in order to use TeleSign’s API. If you already have an account you can retrieve
them from your account dashboard within the [Portal](https://portal.telesign.com/login). If you have not signed up
yet, sign up [here](https://portal.telesign.com/signup).


Dependencies
------------

We make use of popular, feature-rich and well-tested open-source libraries to perform the underlying functionality of
the SDK. These dependencies are managed by the community accepted package manager. If you are unable to add these
additional third party dependencies to your project we have ensured that the SDK code is easy to read and can serve as
sample code. We have also made sure that more complicated functions such as generate_telesign_headers can be easily
extracted from the SDK and used 'as is' in your project.


Examples
========

**How to Run**

1. Edit file and replace values for API Key, Customer ID, and mobile_number
2. Run the file via : node filename.js

Example: You can run the 1_send_message.js with the following command

```
node examples/messaging/1_send_message.js
```

Sample code: Messaging (SMS)
----------------------------------------

After installing the SDK, begin by including the telesign SDK and declaring customerId, apiKey, restEndpoint, and
timeout variables.

Setup Telesign Client

```javascript
    var TeleSignSDK = require('telesignsdk');
    var customerId = "FFFFFFFF-EEEE-DDDD-1234-AB1234567890"; // find in portal.telesign.com
    var apiKey = "EXAMPLE----TE8sTgg45yusumoN4BYsBVkh+yRJ5czgsnCehZaOYldPJdmFh6NeX8kunZ2zU1YWaUw/0wV6xfw==";
    var restEndpoint = "https://rest-api.telesign.com";
    var timeout = 10*1000; // 10 secs

    var telesign = new TeleSignSDK( customerId,
                                    apiKey,
                                    restEndpoint,
                                    timeout // optional
                                  );
```

Send an SMS

```javascript
    var phoneNumber = "phone_number"; // Your end user’s phone number, as a string of digits without spaces or
    // punctuation, beginning with the country dialing code (for example, “1” for North America)
    var message = "You're scheduled for a dentist appointment at 2:30PM.";
    var messageType = "ARN"; // ARN = Alerts, Reminders, and Notifications; OTP = One time password; MKT = Marketing
    var referenceId = null; // need this to check status later

    telesign.sms.message(function(err, reply){
            if(err){
                console.log("Error: Could not reach TeleSign's servers");
                console.error(err); // network failure likely cause for error
            }
            else{
                console.log("YAY!, the SMS message is being sent now by TeleSign!");
                console.log(reply);
                referenceId=reply.reference_id; // save the reference_id to check status of the message
            }
        },
        phoneNumber,
        message,
        messageType
    );
```


Further reading
---------------

* If you are using the trial account, make sure you understand it has some limitations. 
Use only the phone number you have verified.
* For documentation, see the [TeleSign Standard Documentation](https://standard.telesign.com).
* Code examples can be found [here](/examples).
