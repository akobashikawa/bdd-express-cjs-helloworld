Feature: Say Hello World

    HelloWorld shows "Hello World!" message.

    Rule: HelloWorld always says same message

        Scenario: User in services
            Given User is in services
            When User request service helloworld
            Then "Hello World!" is returned

        Scenario: User in console
            Given User is in console
            When User run the app
            Then "Hello World!" is displayed in console

        Scenario: User in browser
            Given User is in browser
            When User open home page
            Then "Hello World!" is displayed in browser