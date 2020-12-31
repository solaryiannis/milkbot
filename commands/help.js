const Discord = require('discord.js');

module.exports = {
	n: 'help',
	a: ['help', 'h', 'command', 'commands', 'c'],
    d: 'It\'s time to help!',
    u: '%help or %help <command>',
    
    async execute(client, message, args) {
        const { commands } = message.client;
        const command = commands.get(args[0]) || commands.find(c => c.aliases && c.aliases.includes(args[0]));
        if (!args.length || !command) {
          return message.channel.send(`**Commands List:**\n\`\`\`${commands.map(command => command.n).join(', ')}\`\`\`\nFor help with a specific command, type \`%help <command>\`!`);
        }

        const embed = new Discord.RichEmbed()
    .setColor(0x000000)
    .setTitle(`%help`)
  	.addField('Command Name (Aliases)', `${command.n} (${command.a.join(', ')})`)
  	.addBlankField()
  	.addField('Description', command.d, true)
  	.addField('Usage', command.u, true)
  	.setTimestamp()
  	.setFooter(`I'm ${client.user.tag}!`, client.user.avatarURL);
    message.channel.send({embed});
	},
};