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
          return message.channel.send(`**Commands List:**\n\`\`\`${commands.map(command => command.n).join(', ')}\`\`\`\nFor help with a specific command, type \`moo!help <command>\`!`);
        }

        message.channel.send(`**${command.n}** (known as ${command.a.join(', ')}).\n${command.d}\n\nTo use this command: type \`${command.u}\` and I'll be right there! :O`);
	},
};