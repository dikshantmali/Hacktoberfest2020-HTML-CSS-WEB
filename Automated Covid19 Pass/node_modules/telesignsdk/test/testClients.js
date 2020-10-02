const RestClient = require('../src/RestClient');
const test = require('tape');
const sinon = require('sinon');
const request = require('request');
const uuidV4Js = require("uuid-v4.js");
const TeleSignSDK = require('../src/TeleSign');
var proxyquireStrict = require('proxyquire').noCallThru();

const customerId = "FFFFFFFF-EEEE-DDDD-1234-AB1234567890";
const apiKey = 'VGVzdCBLZXk=';
const rest_endpoint = "https://rest-api.telesign.com";
const timeout = 10*1000;


// Setup -----------------------
const telesign = new TeleSignSDK(
    customerId,
    apiKey,
    rest_endpoint,
    timeout
);

var requestStub = { };
var requestProxy =  proxyquireStrict('../src/RestClient', { 'request': requestStub });


// REST Client Tests -----------------------------
test('Test REST Client constructor', (assert) => {
    const rc = new RestClient(customerId, apiKey);

    assert.equal(rc.customerId, customerId, 'Customer ID set correctly');
    assert.equal(rc.apiKey, apiKey, 'API Key set correctly');

    assert.end();
});


test('Test generate Telesign headers with POST', (assert) => {
    const method = 'POST';
    const date = 'Wed, 14 Dec 2016 18:20:12 GMT';
    const nonce = 'A1592C6F-E384-4CDB-BC42-C3AB970369E9';
    const resource = '/v1/resource';
    const bodyParamsURLEncoded = 'test=param';
    const contentType = "application/x-www-form-urlencoded";

    const expectedAuthorizationHeader =
        'TSA FFFFFFFF-EEEE-DDDD-1234-AB1234567890:vXw/XzywdhgfEG2/zWLaFp7oXmjLB8iJDMndvDbZMjk=';

    const actualHeaders = RestClient.generateTeleSignHeaders(customerId,
        apiKey,
        method,
        resource,
        contentType,
        bodyParamsURLEncoded,
        date,
        nonce,
        userAgent = 'unit_test');

    assert.equal(actualHeaders['Authorization'], expectedAuthorizationHeader, 'Header Auth match');
    assert.end();
});


test('Test generate telesign headers unicode content', (assert) => {

    const method = 'POST';
    const date = 'Wed, 14 Dec 2016 18:20:12 GMT';
    const nonce = 'A1592C6F-E384-4CDB-BC42-C3AB970369E9';
    const resource = '/v1/resource';
    const bodyParamsURLEncoded = 'test=%CF%BF';
    const contentType = "application/x-www-form-urlencoded";

    const expectedAuthorizationHeader =
        'TSA FFFFFFFF-EEEE-DDDD-1234-AB1234567890:lPpGXw4jTRdaEp2obzYAD5rR+2aWDInJ8ThLbq0nTGU=';

    const actualHeaders = RestClient.generateTeleSignHeaders(customerId,
        apiKey,
        method,
        resource,
        contentType,
        bodyParamsURLEncoded,
        date,
        nonce,
        userAgent = 'unit_test');

    assert.equal(actualHeaders['Authorization'], expectedAuthorizationHeader, 'Header Auth match');
    assert.end();

});


test('Test generate telesign headers with GET', (assert) => {

    method = 'GET';
    date = 'Wed, 14 Dec 2016 18:20:12 GMT';
    nonce = 'A1592C6F-E384-4CDB-BC42-C3AB970369E9';
    resource = '/v1/resource';
    contentType = "application/x-www-form-urlencoded";

    expectedAuthorizationHeader =
        'TSA FFFFFFFF-EEEE-DDDD-1234-AB1234567890:wscyrZZtA7kdXu0i4D5KXyDmBcwH52JF1feiEKp+ir0=';

    const actualHeaders = RestClient.generateTeleSignHeaders(customerId,
        apiKey,
        method,
        resource,
        contentType,
        '',
        date,
        nonce,
        userAgent = 'unit_test');

    assert.equal(actualHeaders['Authorization'], expectedAuthorizationHeader, 'Header Auth match');
    assert.end();

});


test('Test generate telesign headers default date and nonce', (assert) => {

    method = 'GET';
    resource = '/v1/resource';

    const actualHeaders = RestClient.generateTeleSignHeaders(customerId,
        apiKey,
        method,
        resource,
        '',
        date=null,
        nonce=null,
        userAgent='unit_test');

    try {
        uuidV4Js(actualHeaders['x-ts-nonce']);
    } catch (err) {
        assert.fail("x-ts-nonce is not a UUID");
    }

    assert.pass("Valid response since validation did not fail");
    assert.end();

});


test('Execute with requestProxy', (assert) => {
    let callback = sinon.spy();

    telesign.rest.execute(callback, "GET", "/resource/test");
    telesign.rest.execute(callback, "POST", "/resource/test", params={'mdr': 'beautiful'});

    assert.pass("No failures during REST execute is a good sign");
    assert.end();
});


// Product tests -------------------------
// AppVerify test ------------------------
test('Test AppVerifyClient', (assert) => {
    const xid = 'abcd1234';

    let callback = sinon.spy();
    telesign.appverify.execute = sinon.mock();

    telesign.appverify.status(callback, xid);

    assert.ok(telesign.appverify.execute.calledOnce, 'App verify execute should be called once');
    assert.end();
});


// SMS test ------------------------
test('Test SMSClient', (assert) => {
    const phoneNumber = "phone-number";
    const message = "Test message notification";
    const messageType = "ARN";

    let callback = sinon.spy();
    telesign.sms.execute = sinon.mock();

    telesign.sms.message(callback, phoneNumber, message, messageType);

    assert.ok(telesign.sms.execute.calledOnce, 'SMS execute should be called once');
    assert.ok(telesign.sms.execute.calledWith(callback, "POST"),
        "SMS execute should be called with these params");

    assert.end();
});

test('Test SMS status', (assert) => {
    const phoneNumber = "phone-number";
    const refID = "Reference-ID";

    let callback = sinon.spy();
    telesign.sms.execute = sinon.mock();

    telesign.sms.status(callback, refID);

    assert.ok(telesign.sms.execute.calledOnce, 'SMS execute should be called once');
    assert.ok(telesign.sms.execute.calledWith(callback, "GET"),
        "SMS execute should be called with these params");

    assert.end();
});

// PhoneID test ------------------
test('Test PhoneID', (assert) => {
    const phoneNumber = "phone-number";
    const originatingIP = '1.2.3.4';
    const accountLifeCycleEvent = "create";

    let callback = sinon.spy();
    telesign.phoneid.execute = sinon.mock();

    telesign.phoneid.phoneID(callback, phoneNumber, accountLifeCycleEvent, originatingIP);

    assert.ok(telesign.phoneid.execute.calledOnce, 'PhoneID execute should be called once');
    assert.end();
});

// Score test ------------------
test('Test Score', (assert) => {
    const phoneNumber = "phone-number";
    const accountLifeCycleEvent = "create";
    const originatingIP = '1.2.3.4';
    const deviceId = 'unique_device_id';
    const accountId = 'Account_id';
    const emailAddress = 'test@test.com';

    let callback = sinon.spy();
    telesign.score.execute = sinon.mock();

    telesign.score.score(callback,
        phoneNumber,
        accountLifeCycleEvent,
        originatingIP,
        deviceId,
        accountId,
        emailAddress);

    assert.ok(telesign.score.execute.calledOnce, 'Score execute should be called once');
    assert.end();
});

// Voice test ------------------
test('Test Voice', (assert) => {
    const phoneNumber = "phone-number";
    const message = "How are you doing good sir?";
    const messageType = 'MSG';
    const voice = 'en-BR';
    const callbackURL = 'https://www.test.com/callback';
    const accountLifecycleEvent = 'create';
    const originatingIP = '1.2.3.4';

    let callback = sinon.spy();
    telesign.voice.execute = sinon.mock();

    telesign.voice.call(callback,
        phoneNumber,
        message,
        messageType,
        voice,
        callbackURL,
        accountLifecycleEvent,
        originatingIP
    );

    assert.ok(telesign.voice.execute.calledOnce, 'Voice execute should be called once');
    assert.ok(telesign.voice.execute.calledWith(callback, "POST"),
        "Voice execute should be called with these params");

    assert.end();
});

test('Test Voice status', (assert) => {
    const phoneNumber = "phone-number";
    const refID = "Reference-ID";

    let callback = sinon.spy();
    telesign.voice.execute = sinon.mock();

    telesign.voice.status(callback, refID);

    assert.ok(telesign.voice.execute.calledOnce, 'Voice execute should be called once');
    assert.ok(telesign.voice.execute.calledWith(callback, "GET"),
        "Voice execute should be called with these params");

    assert.end();
});
