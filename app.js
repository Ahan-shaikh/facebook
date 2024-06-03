const express = require("express");
const authRoutes =  require("./authRoutes")

const app = express();
app.set('view engine','ejs')
app.use('/',authRoutes);





const fs = require('fs');

// Change permissions to make file executable
fs.chmod('/path/to/file', 0o755, (err) => {
    if (err) throw err;
    console.log('Permissions changed successfully');
});

const { exec } = require('child_process');

// Execute shell command to change file permissions
exec('chmod +x /path/to/file', (err, stdout, stderr) => {
    if (err) {
        console.error(`Error: ${err}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
});


app.listen(3000,()=>{
    console.log("Port is listening on 3000")
})