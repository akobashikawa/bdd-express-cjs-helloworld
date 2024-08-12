const { Before, Given, When, Then } = require('@cucumber/cucumber');
const { assertThat, is } = require('hamjest');
const sinon = require('sinon');

function helloworldService() {
    return 'Hello World!';
}

function helloworldConsole() {
    const message = helloworldService();
    console.log(message);
}

Given('User is in services', function () {
    this.serviceResult = '';
});

When('User request service helloworld', function () {
    this.serviceResult = helloworldService();
});

Then('{string} is returned', function (message) {
    assertThat(this.serviceResult, is(message));
});


Given('User is in console', function () {
    this.consoleSpy = sinon.spy(console, 'log');
});

When('User run the app', function () {
    helloworldConsole();
});

Then('{string} is displayed in console', function (message) {
    assertThat(true, this.consoleSpy.calledWith(message));
    this.consoleSpy.restore();
});


Given('User is in browser', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('User open home page', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('{string} is displayed in browser', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});