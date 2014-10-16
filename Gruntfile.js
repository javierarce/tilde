module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  // 1. All configuration goes here
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            'dist/*',
            '!dist/.git*'
          ]
        }]
      },
      css: {
        files: [{
          dot: true,
          src: [
            'dist/css',
          ]
        }]
      },
      js: {
        files: [{
          dot: true,
          src: [
            'dist/js',
          ]
        }]
      }
    },

    exec: {
      capture: {
        cmd: 'node scripts/capture.js',
        stdout: true
      },
      deploy: {
        cmd: 'sh scripts/publish'
      }
    },

    concat: {
      html: {
        src: [
          'index.html'
        ],
        dest: 'dist/index.html'
      },
      css: {
        src: [
          'css/*.css'
        ],
        dest: 'dist/css/<%= pkg.name %>.css'
      },
      js: {
        src: [
          'js/vendor/jquery.min.js',
          'js/vendor/underscore.min.js',
          'js/vendor/jquery.highlight.js',
          'js/vendor/jquery.music.snitch.js',
          'js/vendor/retina.js',
          'js/*.js',
        ],
        dest: 'dist/js/<%= pkg.name %>.js'
      }
    },

    uglify: {
      options: {
        report: 'min',
        mangle: true,
        compress: true
      },
      build: {
        src: 'dist/js/<%= pkg.name %>.js',
        dest: 'dist/js/<%= pkg.name %>.min.js'
      }
    },

    jshint: {
      all: ['Gruntfile.js', 'js/app.js']
    },

    scsslint: {
      allFiles: [
        'scss/*.scss',
      ],
      options: {
        config: '.scss-lint.yml'
      },
    },

    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'scss',
          src: ['*.scss'],
          dest: 'css',
          ext: '.css'
        }]
      }
    },

    autoprefixer: {
      dist: {
        files: [{ expand: true, cwd: 'css', src: '**/*.css', dest: 'dist/css/' }]
      }
    },

    cssmin: {
      dist: {
        files: {
          'dist/css/<%= pkg.name %>.min.css': ['dist/css/<%= pkg.name %>.css'],
          'dist/css/<%= pkg.name %>-flat.min.css': ['dist/css/<%= pkg.name %>-flat.css']
        }
      }
    },

    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'img',
          src: '**/*.{gif,jpeg,jpg,png}',
          dest: 'dist/img'
        }]
      }
    },

      compass: {
        dist: {
          options: {
            config: 'config.rb'
          }
        }
      },

    watch: {
      scripts: {
        files: ['js/*.js'],
        tasks: ['concat', 'uglify', 'jshint'],
        options: {
          livereload: false,
          spawn: false
        },
      },

      css: {
        files: ['scss/*.scss'],
        tasks: ['sass'],
        options: {
          livereload: true,
          spawn: false
        }
      }
    },

    targethtml: {
      dist: {
        files: {
          'dist/index.html': 'index.html'
        }
      }
    },
    push: {
      options: {
        files: ['package.json'],
        updateConfigs: [],
        add: true,
        addFiles: ['.'],
        commit: true,
        commitMessage: 'Release v%VERSION%',
        commitFiles: ['package.json', 'captures/*', 'dist/*'],
        createTag: true,
        tagName: 'v%VERSION%',
        tagMessage: 'Version %VERSION%',
        push: true,
        pushTo: 'origin',
        releaseBranch: ['master'],
        npm: false,
        gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d' // options to use with '$ git describe'
      }
    }

  });

  grunt.registerTask('css', [
    'sass',
  ]);

  grunt.registerTask('build', [
    'clean',
    'sass',
    'concat:css',
    'concat:html',
    //'autoprefixer',
    'cssmin',
    'imagemin',
    'concat:js',
    'uglify',
    'targethtml'
  ]);

  grunt.registerTask('capture', [
    'exec:capture'
  ]);

  grunt.registerTask('release', [
    'build',
    'exec:deploy',
    'exec:capture',
    'push'
  ]);

  grunt.registerTask('default', [
    'newer:scsslint',
    'build'
  ]);

};
