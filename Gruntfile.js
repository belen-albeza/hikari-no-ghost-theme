module.exports = function (grunt) {
  [
    'grunt-sass'
  ].forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    sass: {
      options: {
        sourceComments: 'map',
        sourceMap: 'sass',
        outputStyle: 'compressed'
      },
      dist: {
        files: {
          'assets/css/main.css': 'assets/sass/main.sass'
        }
      }
    }
  });

  grunt.registerTask('build', ['sass']);
};
