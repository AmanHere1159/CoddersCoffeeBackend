const path =require("path");

exports.testpath=(req,res)=>{
    console.log("*******************")
    console.log(__dirname);
    console.log(__filename);
    const filepath=__filename;
    //  // 1. Basename=> Returns the last part of the path (like a filename).
    console.log('Basename => ',path.basename(filepath));

    // // 2. `path.dirname`: Get the directory name of the path
    console.log('dirname:', path.dirname(filepath)); // Output: 

    // // 3. `path.extname`: Get the file extension
    console.log('extname:', path.extname(filepath)); // Output: .js

    // // 4. `path.isAbsolute`: Check if a path is absolute
    console.log('isAbsolute:', path.isAbsolute(filepath)); // Output: true

    // // 5. `path.join`: Join multiple path segments
    console.log('join:', path.join("E:", "files", "hello.txt"));
    console.log(path.join(filepath, '..', 'newfolder', 'hello.txt'));

    // // Output: E:\files\hello.txt (windows)
    console.log(path.join(__dirname, 'users.json'));
    console.log(path.join(__dirname, "/db", 'users.json'));
    console.log(path.join(__dirname, "..", 'users.json'));


    // 6. `path.normalize`: Normalize a path, resolving `..` and `.`
    //single back slash(\) is escape sequence(eg. \n,\t,\",\\,\',etc.)
    console.log('normalize:', path.normalize('C:/Users\\username//project/../file.js'));
    // Output:  C:\Users\username\file.js

    // 7. `path.parse`: Parse a path into an object
    const parsedPath = path.parse(filepath);
    console.log('parse:', parsedPath);


    // 8. `path.format`: Build a path string from an object
    console.log('format:', path.format(parsedPath));
    // Output: /Users/username/project/file.js

    // 9. `path.relative`: Get the relative path from one path to another
    console.log('relative:',
        path
            .relative(
                'E:/Professional Data/',
                'E:/Professional Data/Ducat/'
            ));

    // 10. `path.resolve`: Resolve a sequence of paths into an absolute path
    console.log('resolve:', path.resolve('file.js'));

    // 11. `path.sep`: Get the platform-specific path segment separator
    console.log('sep:', path.sep); // Output: / (on POSIX) or \ (on Windows)

    // 12. `path.delimiter`: Get the platform-specific path delimiter
    console.log('delimiter:', path.delimiter); // Output: : (on POSIX) or ; (on Windows)

    // 13. `path.toNamespacedPath`: Convert path to a namespace path (Windows only)
    console.log('toNamespacedPath:', path.toNamespacedPath(filepath));
    // Output: //?/Users/username/project/file.js (on Windows) or the original path on POSIX

    // 14. `path.posix`: Methods for POSIX-style paths
    console.log('POSIX join:', path.posix.join('/Users', 'username', 'file.js'));
    // Output: /Users/username/file.js

    // 15. `path.win32`: Methods for Windows-style paths
    console.log('Win32 join:', path.win32.join('C://', 'Users', 'username', 'file.js'));
    // Output: C:/Users/username/file.js

    res.end("learning path module");
  
}
/*
An absolute path specifies the full path from the root directory (/ in Linux/macOS, C:\ in Windows).

📌 Example in File System
Linux/macOS: /home/user/project/file.txt
Windows: C:\Users\aman\Documents\file.txt

*/