"use strict";

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    banner: "/*\n" +
    " * <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n" +
    " * <%= pkg.description %>\n" +
    " * <%= pkg.homepage %>\n" +
    " *\n" +
    " * Made by <%= pkg.author.name %>\n" +
    " * Under <%= pkg.license %> License\n" +
    " */\n",

    jshint: {
      options: {
        jshintrc: ".jshintrc"
      },
      all: [
      "Gruntfile.js",
      "src/metisMenu.js"
      ]
    },
    concat: {
      plugin: {
        src: ["src/metisMenu.js"],
        dest: "newcss/metisMenu.js"
      },
      css: {
        src: ["src/metisMenu.css"],
        dest: "newcss/metisMenu.css"
      },
      options: {
        banner: "<%= banner %>"
      }
    },
    uglify: {
      plugin: {
        src: ["newcss/metisMenu.js"],
        dest: "newcss/metisMenu.min.js"
      },
      options: {
        banner: "<%= banner %>"
      }
    },
    cssmin: {
      options: {
        banner: "<%= banner %>"
      },
      menucss: {
        src: ["src/metisMenu.css"],
        dest: "newcss/metisMenu.min.css"
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-cssmin");

  grunt.registerTask("travis", ["jshint"]);
  grunt.registerTask("default", ["jshint", "concat", "uglify", "cssmin"]);
};
