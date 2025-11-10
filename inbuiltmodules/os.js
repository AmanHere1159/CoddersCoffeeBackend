const os = require("os")

exports.testos =(req,res)=>{
    console.log("Architecture:", os.arch());
    console.log("Platform:", os.platform());
    console.log("OS Type:", os.type());
    console.log("OS Release:", os.release());
    console.log("CPU Count and Info:", os.cpus());
    console.log("Total Memory (GB):", (os.totalmem() / (1024 * 1024 * 1024)));
    console.log("Free Memory (GB):", (os.freemem() / (1024 * 1024 * 1024)));
    console.log("System Uptime (seconds):", os.uptime());
    console.log("Home Directory:", os.homedir());
    console.log("Temp Directory:", os.tmpdir());
    console.log("Hostname:", os.hostname());
    console.log("Network Interfaces:", os.networkInterfaces());
    console.log("User Info:", os.userInfo());
    console.log("EOL (end-of-line):", JSON.stringify(os.EOL));
    console.log("Available Parallelism:", os.availableParallelism?.());
    console.log("OS Version:", os.version?.());
    res.end("os is running.....");
}