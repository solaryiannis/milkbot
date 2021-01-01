const Discord = require('discord.js');

module.exports = {
    n: 'say',
    a: ['say', 'speak', 's'],
    d: 'Let Milk speak!',
    u: 'moo!say <text>',
      
    async execute(client, message, args) {
      message.channel.send(args.join(" "));
    },
  };