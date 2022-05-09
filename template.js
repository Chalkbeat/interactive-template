var exec = require("child_process").exec;
var path = require("path");

exports.description = "A standard starting-point for news app development from NPR."
exports.template = function(grunt, init, done) {
  //prelims
  var here = path.basename(process.cwd());

  //process
  init.process(init.defaults, [
    init.prompt("author_name"),
    init.prompt("app_name", here),
    init.prompt("app_description"),
    init.prompt("github_repo", "chalkbeat/" + here)
  ], function(err, props) {
    //add environment variables, dynamic properties
    props.year = new Date().getFullYear();

    var root = init.filesToCopy(props);
    init.copyAndProcess(root, props, { noProcess: "src/assets/**" });
    grunt.file.mkdir("data");
    grunt.file.mkdir("src/assets/synced");

    //install node modules
    console.log("Installing Node modules...");
    exec("npm install --cache-min 999999", function(err, stdin, stderr) {
      if (err) console.error(stdin, stderr);
      done();
    });
  });
};
