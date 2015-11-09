module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            sass: {
                files: ['src/_animations.scss', 'src/_shadows.scss', 'src/_borders.scss', 'src/_floats.scss'],
                tasks: ['concat'],
                options: {
                    spawn: false
                },
            },
            test: {
                files: ['test/sass/main.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                },
            }
        },
        concat: {
            dist: {
                src: ['src/_animations.scss', 'src/_shadows.scss', 'src/_borders.scss', 'src/_floats.scss'],
                dest: 'build/_pineapple-sass.scss',
            },
        },
        sass: {
            options: {
                outputStyle: 'expanded'
            },
            dist: {
                files: {
                    'test/css/main.css': 'test/sass/main.scss'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('default', ['watch']);
};
