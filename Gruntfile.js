module.exports = function (grunt) {
  [
    'grunt-contrib-clean',
    'grunt-contrib-watch',
    'grunt-sass'
  ].forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    clean: {
      sass: ['assets/css/main.css', 'assets/css/sass'],
    },
    sass: {
      options: {
        outputStyle: 'compressed'
      },
      dist: {
        files: {
          'assets/css/main.css': 'assets/sass/main.sass'
        }
      }
    },
    watch: {
      sass: {
        files: ['assets/sass/**/*.sass'],
        tasks: ['sass']
      }
    }
  });

  grunt.registerTask('build', ['clean', 'sass']);
  grunt.registerTask('run', ['build', 'watch']);
};
