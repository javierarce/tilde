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
      move_captures: {
        cmd: 'sh move_captures'
      },
      capture: {
        cmd: 'node capture.js'
      },
      deploy: {
        cmd: 'sh publish'
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
          //'scss/vendor/reset.css',
          'scss/*.scss'
        ],
        dest: 'dist/css/<%= pkg.name %>.css'
      },
      js: {
        src: [
          'js/vendor/*.js',
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
        files: [{
          expand: true,
          cwd: '.tmp/css/',
          src: '{,*/}*.css',
        dest: 'dist/css/'
        }]
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

    watch: {
      html: {
        files: ['index.html', '.plan', '.bot'],
        options: {
          livereload: false
        }
      },

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
        //tasks: ['compass'],
        options: {
          livereload: false,
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
        commitFiles: ['package.json', 'dist/*'],
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

  grunt.registerTask('build', [
    'clean',
    'sass',
    'concat:css',
    'concat:html',
    'autoprefixer',
    'cssmin',
    //'createDefaultTemplate',
    //'jst',
    'concat:js',
    'uglify',
    'targethtml',
    'exec:move_captures',
    'imagemin'
  ]);

  grunt.registerTask('release', [
    'build',
    'exec:capture',
    'exec:deploy',
    'push'
  ]);

  grunt.registerTask('default', [
    'newer:scsslint',
    'build'
  ]);

};
