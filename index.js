var net = require('net'),
    readline = require('readline'),
    options = {
      port: process.argv[3],
      host: process.argv[2]
    };

var rl = readline.createInterface({
  input: process.stdin,
    output: process.stdout
});

rl.setPrompt('>');
rl.prompt();

var client = net.connect(options);

client.on('data', function(data){
  console.log(data.toString());
});

client.on('end', function(){
  console.log('client disconnect');
  process.exit();
});

rl.on('line', function(line){
  client.write(line + "\n");
  rl.prompt();
});
