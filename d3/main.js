/* global $, d3 */

d3.json('data/experiment.json', function(error, json) {
    if (error) {
        return console.warn(error);
    }
    console.log(json);
});
