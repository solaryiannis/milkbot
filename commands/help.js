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

    const commandName = command.n;
    const commandAlias = command.a.join(', ');
    const commandDescrip = command.d;
    const commandUse = command.use;

    const embed = new Discord.MessageEmbed();
    embed.setColor(0xF097DF);
    embed.setTitle(`moo!help`);
  	embed.addField('Command Name (Aliases)', `${commandName} (${commandAlias})`);
  	embed.addField('\u200b', '\u200b');
  	embed.addField('Description', commandDescrip, true);
  	embed.addField('Usage', commandUse, true);
  	embed.setTimestamp();
  	embed.setFooter(`I'm Milk!`, message.guild.iconURL());
    message.channel.send({embed});
	},
};