// NOTE: install dot from NPM before using this module
// duplicates EJS templating for the client, so we can share with the build process

import dot from "dot";

dot.templateSettings.varname = "data";
dot.templateSettings.selfcontained = true;
dot.templateSettings.evaluate = /<%([\s\S]+?)%>/g;
dot.templateSettings.interpolate = /<%=([\s\S]+?)%>/g;

export default dot;