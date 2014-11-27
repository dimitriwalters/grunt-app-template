module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    app: 'app',
    dist: 'dist',
    clean: ['<%= dist %>'],
    copy: {
      my_target: {
        files: [{
            expand: true,
            cwd: '<%= app %>/',
            src: ['**/*.html'],
            dest: '<%= dist %>/'
        }]
      }
    },
    cssmin: {
      my_target: {
        files: [{
          expand: true,
          cwd: '<%= app %>/',
          src: ['**/*.css'],
          dest: '<%= dist %>/',
          ext: '.min.css'
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

  grunt.registerTask('default', ['clean', 'copy', 'cssmin', 'uglify']);

};