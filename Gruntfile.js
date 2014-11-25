module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    app: 'app',
    dist: 'dist',
    copy: {
      my_target: {
        files: [{
            expand: true,
            cwd: '<%= app %>/',
            src: ['**/*.html', '**/*.css'],
            dest: '<%= dist %>/'
        }]
      }
    },
    uglify: {
      my_target: {
        files: [{
            expand: true,
            cwd: '<%= app %>/',
            src: ['**/*.js'],
            dest: '<%= dist %>/'
        }]
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['copy', 'uglify']);

};