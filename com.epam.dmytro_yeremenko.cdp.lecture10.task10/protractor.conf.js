exports.config = {
    directConnect: true,
    allScriptsTimeout: 11000,

    suites: {
        test: './test/test.spec.js'
    },

    capabilities: {
        browserName: 'chrome'
    },

    baseUrl: 'https://www.lego.com/en-us',

    framework: 'jasmine',

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }
};
