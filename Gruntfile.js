module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    app: 'app',
    dist: 'dist',
    clean: ['<%= dist %>'],
    wiredep: {
      app: {
        src: ['<%= app %>/index.html']
      }
    },
    useminPrepare: {
      html: '<%= app %>/index.html',
      options: {
        dest: '<%= dist %>',
        flow: {
          html: {
            steps: {
              js: ['uglifyjs'],
              css: ['cssmin']
            },
            post: {}
          }
        }
      }
    },
    usemin: {
      html: ['<%= dist %>/{,*/}*.html'],
      css: ['<%= dist %>/styles/{,*/}*.css'],
      options: {
        assetsDirs: ['<%= dist %>','<%= dist %>/images']
      }
    },
    copy: {
      dist: {
        files: [{
            expand: true,
            cwd: '<%= app %>/',
            src: ['**/*.html'],
            dest: '<%= dist %>/'
        }]
      }
    }
  });

  grunt.registerTask('default', [
    'clean',
    'wiredep',
    'useminPrepare',
    'uglify',
    'cssmin',
    'copy',
    'usemin'
  ]);

};