module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    eslint: {
      options: {
        config: '.eslintrc.js',
        ignorePath: '.eslintignore',
      },
      src: [ '**/*.js' ],
    },
  });

  grunt.loadNpmTasks('gruntify-eslint');

  grunt.registerTask('default', [ 'eslint' ]);
  grunt.registerTask('build', [ 'eslint' ]);
};
