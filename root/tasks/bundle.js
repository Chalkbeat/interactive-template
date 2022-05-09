/*
Build a bundled app.js file using browserify
*/
module.exports = function(grunt) {

  var { rollup } = require("rollup");
  var { nodeResolve } = require("@rollup/plugin-node-resolve");
  var commonJS = require("@rollup/plugin-commonjs");
  var { babel }  = require("@rollup/plugin-babel");
  var less = require("less");
  var fs = require("fs").promises;
  var path = require("path");
  var npmImporter = require("./lib/npm-less");
  var { importText, importLESS } = require("./lib/rollup-plugins");

  grunt.registerTask("bundle", "Build app.js using browserify", function(mode) {
    //run in dev mode unless otherwise specified
    mode = mode || "dev";
    var done = this.async();

    //specify starter files here - if you need additionally built JS, just add it.
    var config = grunt.file.readJSON("project.json");
    var seeds = config.scripts;

    var plugins = [
      nodeResolve({
        rootDir: "node_modules",
        browser: true
      }),
      importText(),
      importLESS(),
      commonJS({
        requireReturnsDefault: "auto"
      }),
      babel({
        targets: { browsers: ["safari >= 14"]},
        babelHelpers: "bundled",
        presets: [
          "@babel/preset-env",
        ]
      })
    ];

    grunt.file.mkdir("build");

    var bundle = async function() {

      for (var [src, dest] of Object.entries(seeds)) {

        var rolled = await rollup({
          input: src,
          plugins
        });

        var { output } = await rolled.generate({
          name: "interactive",
          format: "umd",
          sourcemap: true,
          interop: "default"
        });

        var [ bundle ] = output;

        var { code, map } = bundle;

        // add source map reference
        var smURL = `./${path.basename(dest)}.map`;
        code += `\n//# sourceMappingURL=${smURL}`;

        var writeCode = fs.writeFile(dest, code);
        var writeMap = fs.writeFile(dest + ".map", map.toString());

        await Promise.all([writeCode, writeMap]);
        console.log(`Wrote ${src} -> ${dest}`);
      }

    };

    bundle().then(done);

  });

};
