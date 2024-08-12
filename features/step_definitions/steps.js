const { Before, Given, When, Then } = require('@cucumber/cucumber');
const { assertThat, is } = require('hamjest');

function helloworld() {
    return 'Hello World!';
}

Given('User is in console', function () {
});

When('User run the app', function () {
});

Then('{string} is displayed', function (message) {
    const helloMessage = helloworld();
    assertThat(helloMessage, is(message));
});