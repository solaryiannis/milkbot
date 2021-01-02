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
          return message.channel.send(`**Commands List:**\n\`\`\`${commands.map(command => command.n).join(', ')}\`\`\`\nFor help with a specific command, type \`moo!help <command>\`!`);
        }

    const embed = new Discord.MessageEmbed();
    embed.setColor(0xF097DF);
    embed.setTitle(`moo!help`);
  	embed.addField('Command Name (Aliases)', `${command.n} (${command.a.join(', ')})`);
  	embed.addField('\u200b', '\u200b');
  	embed.addField('Description', command.d, true);
  	embed.addField('Usage', command.u, true);
  	embed.setTimestamp();
  	embed.setFooter(`I'm Milk!`, client.user.avatarURL);
    message.channel.send({embed});
	},
};