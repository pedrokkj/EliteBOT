const Discord = require('discord.js');

const Database = require('../../database.js');

exports.run = (client, message, args) => {
    let member = message.mentions.users.first() ? message.mentions.users.first() : message.author
    client.Database.Users.findOne({
        '_id': member.id
    }, (err, user) => {

        if (err) throw err;

        if (user) {
            let msg = message.mentions.users.first() ? (`Você tem ${user.coins} coins`) : (`${user.tag} tem ${user.coins}`)
            message.channel.send(msg)

        } else {
            message.channel.send('Não encontrei seu perfil em minha database')
        }
    });
}

exports.help = {
    name: 'coins',
    aliases: ['money', 'saldo']
}