const { Before, After, Given, When, Then } = require('@cucumber/cucumber');
const { assertThat, is } = require('hamjest');
const sinon = require('sinon');
const puppeteer = require('puppeteer');
const server = require('../../app');

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


Before({ tags: '@browser' }, async function () {
    this.browser = await puppeteer.launch();
    this.page = await this.browser.newPage();
});

Given('User is in browser', async function () {
    await this.page.goto('http://localhost:3000');
});

When('User open home page', async function () {
    // Already handled in the Given step
});

Then('{string} is displayed in browser', async function (message) {
    const content = await this.page.content();
    assertThat(content, is(`<html><head></head><body><h1>${message}</h1></body></html>`));
});

After({ tags: '@browser' }, async function () {
    await this.browser.close();
    server.close();
});