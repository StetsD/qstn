const exec = require('child_process').exec;
const cmds = [
  'mkdir supermega',
  'echo supermega created',
  'cd supermega && mkdir wildfowl-01 wildfowl-02 wildfowl-03'];

function run(commands){
  commands[0] && exec(commands[0], (err, out) => {
    if(err){
      return err;
    }

    run(commands.slice(1));
  });
}

run([...cmds]);