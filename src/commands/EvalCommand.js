const Command = require('../core/commands/Command');

class EvalCommand extends Command {

  constructor(client) {
    super(client, {
      name: 'eval',
      description: 'Evaluates custom code',
      usage: '',
      aliases: ['ev']
    });
  }

  async run(message, content) {
    try {
      let evaled = eval(content);

      if (typeof evaled !== 'string') {
        evaled = require('util').inspect(evaled);
      }

      message.channel.send(clean(evaled), {code:'xl'});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }
}

function clean(text) {
  if (typeof(text) === 'string')
    return text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203));
  else
    return text;
}

module.exports = EvalCommand;
