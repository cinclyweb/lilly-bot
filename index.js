const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')
const utils = require('./lilly/utils')


client.on('message', msg => {
    if (msg.content == '$lilly') {
        msg.channel.send('Olá, eu sou a Lilly!!')
    }
})


client.login(config.discord_token)