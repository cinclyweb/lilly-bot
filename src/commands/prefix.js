const mongoose = require('mongoose')
const guildsController = require('../controllers/guildsController')

module.exports = {
    name: 'setprefix',
    description: 'Muda o prefixo usado no servidor',
    args: true,
    guildOnly: true,
    aliases: ['prefix', 'prefixo'],
    usage: '``$setprefix <prefix>``',
    execute(msg, args) {
        if (args[0].length > 1 || args[0].length < 10) {
            const memberHasPermission = msg.member.hasPermission("ADMINISTRATOR") || msg.member.hasPermission('MANAGE_GUILD')

            if (memberHasPermission) {
                guildsController.updatePrefix(msg.guild.id, args[0])
                return msg.reply('**Prefixo atualizado com sucesso para ``' + args[0] + '``!!**')
            } else {
                return msg.reply('**Você não tem permissão para atualizar o prefixo do server!!**')
            }
        } else {
            return msg.reply('O prefixo deve ter de 1 a 10 de tamanho!!')
        }
    }
}