module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      sass: {
        files: 'assets/sass/*.scss',
        tasks: ['sass:dev'],
      },
      js: {
        files: [
          'assets/js/src/*.js'
        ],
        tasks: ['jshint','babel','concat','uglify:scripts']
      }
    },
    sass: {
        options: {
            sourceMap: false
        },
        dev: {
            files: {
              //We fake the minified version here, which is produced properly by prod chain
              'assets/css/style-min.css': 'assets/sass/screen.scss'
            }
        },
        dist: {
            files: {
              'assets/css/style.css': 'assets/sass/screen.scss'
            }
        }
    },
    postcss: {
      options: {
        map: false,
        processors: [
          require('autoprefixer')({browsers: ['last 1 version', '> 1%', 'ie 8']}),
          require('postcss-object-fit-images')
        ]
      },
      dist: {
        files: {
          'assets/css/style-prefixed.css': ['assets/css/style.css']
        }
      }
    },
    cssmin: {
      combine: {
        files: {
          'assets/css/style-min.css': ['assets/css/style-prefixed.css'/*, 'assets/css/vendors/*' */]
        },
      },
    },
    babel: {
        options: {
            presets: ['es2015']
        },
        dist: {
            files: {
                'assets/js/src/main-babel.js': 'assets/js/src/main.js'
            }
        }
    },
    concat: {
      options: {
        separator: ';',
        stripBanners: true
      },
      stageone: {
        src: ['assets/js/src/sources.js','assets/js/src/main-babel.js'],
        dest: 'assets/js/scripts-concat.js',
      }
    },
    uglify: {
      default : {
        files: {
          'assets/js/scripts-min.js': ['assets/js/scripts-concat.js']
        },
      },
    },
    browserSync: {
      files: {
        src : [
          'assets/css/*.css',
          'assets/img/*',
          'assets/js/*.js',
          '**/*.html'
        ],
      },
      options: {
        watchTask: true,
        server: false,
        proxy: 'localhost:8080'
      }
    }
  });

  // Load the Grunt plugins.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-babel');
  // Register the default tasks.
  grunt.registerTask('default', ['browserSync', 'watch']);
  grunt.registerTask('staging', ['sass:dist', 'postcss', 'cssmin','babel','concat','uglify']);
  grunt.registerTask('production', ['sass:dist', 'postcss', 'cssmin','babel','concat','uglify']);
  grunt.registerTask('production-scripts', ['babel','concat','uglify']);
};
