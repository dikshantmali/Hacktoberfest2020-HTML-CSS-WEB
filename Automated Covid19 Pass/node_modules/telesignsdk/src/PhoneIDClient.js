const RestClient = require("./RestClient.js");

/***
 * A set of APIs that deliver deep phone number data attributes that help optimize the end user
 * verification process and evaluate risk.
 */
class PhoneIDClient extends RestClient {

    constructor(customerId,
                apiKey,
                restEndpoint = null,
                timeout = 15000,
                useragent = null) {
        super(customerId, apiKey, restEndpoint, timeout, useragent);

        this.phoneid_resource = "/v1/phoneid/";
        this.contentType = "application/json";
    }

    /***
     * The PhoneID API provides a cleansed phone number, phone type, and telecom carrier
     * information to determine the best communication method - SMS or voice.
     *
     * See https://developer.telesign.com/docs/phoneid-api for detailed API documentation.
     *
     * @param callback: Callback method to handle response.
     * @param phoneNumber: Phone number to call
     * @param accountLifecycleEvent: (Optional) Indicates the phase in lifecycle for the
     * transaction.
     * @param originatingIP: IP address of request origination host
     */
    phoneID(callback, phoneNumber, params = null) {
        this.execute(callback, "POST", this.phoneid_resource + encodeURI(phoneNumber), params);
    }
}

module.exports = PhoneIDClient;
