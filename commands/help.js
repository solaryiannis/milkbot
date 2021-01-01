const Discord = require('discord.js');

module.exports = {
	n: 'help',
	a: ['help', 'h', 'command', 'commands', 'c'],
    d: 'It\'s time to help!',
    u: 'moo!help or moo!help <command>',
    
    async execute(client, message, args) {
        const { commands } = message.client;
        const command = commands.get(args[0]) || commands.find(c => c.aliases && c.aliases.includes(args[0]));
        if (!args.length || !command) {
          const helpEmbed = new Discord.MessageEmbed();
          helpEmbed.setColor(0xF097DF);
          helpEmbed.setTitle(`%help`);
  	      helpEmbed.addField('Commands', commands.map(command => command.n).join(', '));
  	      helpEmbed.addField('\u200b', '\u200b');
  	      helpEmbed.addField('', `For help with a specific command, type moo!<command>`);
  	      helpEmbed.setTimestamp();
  	      helpEmbed.setFooter(`It's Milk!`, client.user.avatarURL);
          return message.channel.send({helpEmbed});
        }

    const embed = new Discord.MessageEmbed();
    embed.setColor(0xF097DF);
    embed.setTitle(`%help`);
  	embed.addField('Command Name (Aliases)', `${command.n} (${command.a.join(', ')})`);
  	embed.addField('\u200b', '\u200b');
  	embed.addField('Description', command.d, true);
  	embed.addField('Usage', command.u, true);
  	embed.setTimestamp();
  	embed.setFooter(`It's Milk!`, client.user.avatarURL);
    message.channel.send({embed});
	},
};