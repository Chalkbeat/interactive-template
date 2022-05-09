/*

Run the LESS compiler against seed.less and output to style.css.

*/

module.exports = function(grunt) {

  var less = require("less");
  var npmImporter = require("./lib/npm-less");

  var options = {
    paths: ["src/css"],
    plugins: [npmImporter]
  };

  grunt.registerTask("less", "Compile styles from src/css/seed.less", function() {

    var done = this.async();

    var config = grunt.file.readJSON("project.json");

    var seeds = config.styles;

    var render = async function() {

      for (var [src, dest] of Object.entries(seeds)) {
        var seed = grunt.file.read(src);
        var o = Object.assign({}, options, { filename: seed });
        try {
          var result = await less.render(seed, o);
          grunt.file.write(dest, result.css);
        } catch (err) {
          grunt.fail.fatal(err.message + " - " + err.filename + ":" + err.line);
        }
      }

    };

    render().then(done);

  });

};