module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist: {
                src: [
                    'src/js/DOM.js',
                    'src/js/app.js',
                ],
                dest: 'dist/js/app.js',
            }
        },


        uglify: {
            build: {
                src:  'dist/js/app.js',
                dest: 'dist/js/app.min.js'
            }
        },

        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'dist/css/app.min.css' : 'src/css/app.scss'
                }
            }
        },

        "babel" : {
            options: {
                sourceMap: true,
                presets: ['es2015']
            },
            dist: {
                files: {
                    'dist/js/app.js': 'dist/js/app.js'
                }
            }
        },


        watch: {
            scripts: {
                files: [
                    'src/js/*.js'
                ],
                tasks: ['concat', 'babel' ,'uglify']
            },

            css: {
                files: [
                    'src/css/*.scss',

                ],
                tasks: ['sass'],
                options: {
                    spawn: false,
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.loadNpmTasks('grunt-babel');

    grunt.registerTask('default', ['concat', 'sass', 'babel', 'uglify', 'watch']);
};
