const RestClient = require('./RestClient.js');

/***
 * TeleSign's Voice API allows you to easily send voice messages. You can send alerts,
 * reminders, and notifications, or you can send verification messages containing time-based,
 * one-time passcodes (TOTP).
 */
class VoiceClient extends RestClient {

    constructor(customerId,
                apiKey,
                restEndpoint = null,
                timeout = 15000,
                useragent = null) {
        super(customerId, apiKey, restEndpoint, timeout, useragent);

        this.voice_resource = "/v1/voice";
        this.voice_status_resource = "/v1/voice/"
    }

    /***
     * Send a voice callto the target phoneNumber.
     *
     * See https://developer.telesign.com/docs/voice-api for detailed API documentation.
     *
     * @param callback: Callback method to handle response.
     * @param phoneNumber: Phone number to call
     * @param message: Text of the message to be converted to voice on call to the end
     * user. [max 2000 code points]
     * @param messageType: This parameter specifies the traffic type being sent in the message.
     * @param voice: The voice parameter allows you to specify a voice to be used to speak your
     * text to speech message.
     * @param callbackURL: (Optional) URL of the callback server you would like to receive updates
     * on.
     * @param accountLifecycleEvent: (Optional) Indicates the phase in lifecycle for the
     * transaction.
     * @param originatingIP: (Optional) End user's IP address.
     */
    call(callback,
         phoneNumber,
         message,
         messageType,
         voice = null,
         callbackURL = null,
         accountLifecycleEvent = null,
         originatingIP = null) {

        var params = {
            phone_number: phoneNumber,
            message: message,
            message_type: messageType
        };
        if (voice != null) {
            params.voice = voice;
        }
        if (callbackURL != null) {
            params.callbackURL = callbackURL;
        }
        if (accountLifecycleEvent != null) {
            params.account_lifecycle_event = accountLifecycleEvent;
        }
        if (originatingIP != null) {
            params.originating_ip = originatingIP;
        }

        this.execute(callback, "POST", this.voice_resource, params);
    }

    /***
     * Get status of voice call transaction.
     *
     * @param callback: Callback method to handle the response.
     * @param referenceId: Reference ID received in the response of call.
     */
    status(callback, referenceId) {

        var status_resource = this.voice_status_resource + referenceId;
        this.execute(callback, "GET", status_resource);
    }
}

module.exports = VoiceClient;
