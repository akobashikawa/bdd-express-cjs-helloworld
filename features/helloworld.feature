Feature: Say Hello World

    HelloWorld shows "Hello World!" message.

    Rule: HelloWorld always says same message

        Scenario: User in console
            Given User is in console
            When User run the app
            Then "Hello World!" is displayed