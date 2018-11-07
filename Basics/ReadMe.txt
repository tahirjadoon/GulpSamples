Its a task runner and helps with repitition tasks like LESS to CSS and moving files

Install Nodejs, it come with npm

Open command prompt and go to your target dir. 

1. install Gulp globally
    > npm install -g gulp

2. create package.jdon files    
    > npm init
    It will ask some question 
    This utility will walk you through creating a package.json file.
    It only covers the most common items, and tries to guess sensible defaults.

    See `npm help json` for definitive documentation on these fields and exactly what they do.

    Use `npm install <pkg>` afterwards to install a package and save it as a dependency in the package.json file.

    Press ^C at any time to quit.
    package name: (basics)
    version: (1.0.0)
    description: Gulp Basics
    entry point: (index.js)
    test command:
    git repository:
    keywords:
    author:
    license: (ISC)
    About to write to C:\Projects\Training\Learning-Examples\Gulp\Basics\package.json:

    {
    "name": "basics",
    "version": "1.0.0",
    "description": "Gulp Basics",
    "main": "index.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "",
    "license": "ISC"
    }

3. Install GULP locallay as dev dependency, this will create the node_modules
    > npm install --save-dev gulp

4. gulpfile.js is the main file where we will create tasks
    Top level functions
    gulp.task - Define tasks
    gulp.src - Source files
    gulp.dest - Destination folder to output
    gulp.watch - watch files and folders for changes

    Look at the file for more details

6. To run the taks, in command prompt 
    >gulp message

    C:\Projects\Training\Learning-Examples\Gulp\Basics>gulp message
    [16:04:03] Using gulpfile C:\Projects\Training\Learning-Examples\Gulp\Basics\gulpfile.js
    [16:04:03] Starting 'message'...
    Gulp is running...
    [16:04:03] Finished 'message' after 898 μs

    for the default task, just run gulp 

7. Some plugins
    >npm install --save-dev gulp-imagemin
    >npm install --save-dev gulp-uglify
    >npm install --save-dev gulp-sass
    >npm install --save-dev gulp-concat
