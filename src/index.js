require('dotenv').config()
const express = require('express')
const app = express()
const Discord = require('discord.js')
const bot = new Discord.Client()
const token = process.env.DISCORD_TOKEN
bot.login(token)


bot.once('ready', () => {
    bot.user.setStatus('online')
    bot.user.setActivity('Use o prefixo "$" para me deixar feliz!!')
})

bot.on('message', msg => {
    if( msg.author.bot || !msg.content.startsWith('$') ) return

    const args = msg.content.slice('$').trim().split(' ')
    const command = args.shift().toLowerCase()

    if (command == '$say') {
        msg.channel.send(args.join(' '))
        msg.delete()
    }

    if (command == '$lilly') {
        msg.reply(`Olá, eu sou a Lilly!! Fui criada pelo <@374303268068655107>!`)
    }
})

app.listen(process.env.PORT || 3000)
