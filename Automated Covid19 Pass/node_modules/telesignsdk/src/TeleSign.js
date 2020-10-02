const RestClient = require('./RestClient.js');
const MessagingClient = require('./MessagingClient.js');
const ScoreClient = require('./ScoreClient.js');
const PhoneIDClient = require('./PhoneIDClient.js');
const VoiceClient = require('./VoiceClient.js');
const AppVerifyClient = require('./AppVerifyClient.js');

module.exports = class TeleSign {
    constructor(customerId,
                apiKey,
                restEndpoint = "https://rest-api.telesign.com",
                timeout = 15000,
                useragent = null) {

        this.rest = new RestClient(customerId, apiKey, restEndpoint, timeout, useragent);
        this.sms = new MessagingClient(customerId, apiKey, restEndpoint, timeout, useragent);
        this.voice = new VoiceClient(customerId, apiKey, restEndpoint, timeout, useragent);
        this.score = new ScoreClient(customerId, apiKey, restEndpoint, timeout, useragent);
        this.phoneid = new PhoneIDClient(customerId, apiKey, restEndpoint, timeout, useragent);
        this.appverify = new AppVerifyClient(customerId, apiKey, restEndpoint, timeout, useragent);
    }
};