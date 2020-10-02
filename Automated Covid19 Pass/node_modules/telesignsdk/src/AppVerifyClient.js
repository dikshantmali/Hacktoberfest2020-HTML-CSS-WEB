const RestClient = require("./RestClient.js");

/***
 * App Verify is a secure, lightweight SDK that integrates a frictionless user verification
 * process into existing native mobile applications.
 */
class AppVerifyClient extends RestClient {

    constructor(customerId,
                apiKey,
                restEndpoint = null,
                timeout = 15000,
                userAgent = null) {
        super(customerId, apiKey, restEndpoint, timeout, userAgent);

        this.appverify_resource = "/v1/mobile/verification/status/";
    }

    /***
     * Get status of app verification transaction.
     *
     * @param callback: Callback method to handle the response.
     * @param externalId: External ID (xid) used in the JWT token during verification.
     */
    status(callback, externalId) {
        this.execute(callback, "GET", this.appverify_resource + externalId);
    }
}

module.exports = AppVerifyClient;
