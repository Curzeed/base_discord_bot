const {SlashCommandBuilder} = require('@discordjs/builders');
const { Client, Intents, Collection } = require('discord.js');
const {MessageEmbed} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('Replies with user infos'),
    
    async execute(interaction) {
        var userDs;
        const channel = interaction.channel;
        await interaction.user.fetch(true).then(function(data) {
            var userid = data;
            console.log(userid);
            userDs = userid;
            return userid;
        });
        embedMes = new MessageEmbed();
        let dateAcc = userDs.createdAt.toLocaleDateString('fr-FR');
        console.log(userDs);
        embedMes.setFooter("T'es le meilleur",userDs.avatarURL());
        embedMes.setThumbnail(userDs.avatarURL());
        embedMes.setTitle(userDs.username);
        embedMes.setColor(userDs.hexAccentColor);
        embedMes.setTimestamp();
        embedMes.addField('**Compte crée le : **\n',`${dateAcc}`);
        
        await channel.send({embeds: [embedMes]});
    }
}
