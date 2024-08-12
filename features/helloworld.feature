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

        @browser
        Scenario: Server is available
            Given Server is up
            And User is in browser
            When User open home page
            Then "Hello World!" is displayed in browser

        @browser
        Scenario: Server is unavailable
            Given Server is down
            And User is in browser
            When User open home page
            Then Error is displayed in browser