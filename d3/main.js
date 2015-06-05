/* global $, d3 */

d3.json('data/ts.json', function(error, json) {
    if (error) {
        return console.warn(error);
    }
    console.log(json);
})
