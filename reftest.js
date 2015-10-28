// from reftet-runner readme.

var path = require("path");
var Promise = require("bluebird");
var ReftestEngine = require("reftest-runner").Engine;

// options
// see https://github.com/azu/reftest-runner/blob/master/typings/reftest-runner/reftest-runner.d.ts
//     https://github.com/azu/reftest-runner/blob/master/src/options/default-options.js
var testEngine = new ReftestEngine({
    server: {
        port: 8989
    },
    rootDir: __dirname
});
function allPassed(resultList) {
    return resultList.every(function (result) {
        return result.passed;
    });
}

// run test with reftest.list
function reftestWithList(reftestListPath) {
    var list = testEngine.getTargetListFromFile(reftestListPath);
    return testEngine.runTests(list).then(function (resultList) {
        var formatter = testEngine.getReporter();
        var output = formatter(resultList);
        console.log(output);
        if (!allPassed(resultList)) {
            return Promise.reject(new Error("FAIL"));
        }
    });
}

var reftestListPath = path.join(__dirname, "reftest.list");
reftestWithList(reftestListPath).catch(function (error) {
    console.error(error.message);
    console.error(error.stack);
});
