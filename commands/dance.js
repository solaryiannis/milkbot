const Discord = require('discord.js');

module.exports = {
    n: 'dance',
    a: ['dance', 'milkdance', 'dancing'],
    d: 'Let Milk dance!',
    u: 'moo!dance',
      
    async execute(client, message, args) {
      message.channel.send(`https://media.tenor.com/images/a0c7154cc85660b18d6d2bc3d5fe8499/tenor.gif`);
    },
  };