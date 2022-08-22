/*

Build CSV into JSON and then load that structure onto the shared state object.
Will use cached data if it hasn't changed since the last run.

*/

var csv = require("csv-parse");
var path = require("path");
var fs = require("fs").promises;

module.exports = function(grunt) {

  grunt.registerTask("csv", "Convert CSV to JSON and load onto grunt.data", function() {

    grunt.task.requires("state");

    var done = this.async();

    var loadCSV = async function() {

      var files = grunt.file.expand("data/**/*.csv");

      grunt.data.csv = {};

      for (var file of files) {
        var parser = csv.parse({
          columns: true,
          cast: true
        });
        var handle = await fs.open(file);
        var stream = handle.createReadStream();
        stream.pipe(parser);
        var parsed = [];
        var keyed = false;
        for await (var record of parser) {
          // check to see if we've found a keyed row
          if (record.key || keyed) {
            // swap output to an object the first time it happens
            if (parsed instanceof Array) {
              parsed = {};
              keyed = true;
            }
            parsed[record.key] = record;
            delete record.key;
          } else {
            parsed.push(record);
          }
        }
        var sanitized = path.basename(file)
          .replace(".csv", "")
          .replace(/\W(\w)/g, function(_, letter) { return letter.toUpperCase() });
        console.log(`Loaded ${file} as grunt.data.${sanitized}`);
        grunt.data.csv[sanitized] = parsed;
      }

    };

    loadCSV().then(done);

  });

};