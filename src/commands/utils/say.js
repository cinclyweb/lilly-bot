module.exports = {
    name: 'say',
    description: 'Diz a mensagem',
    args: true,
    usage: '``$say <mensagem>``',
    guildOnly: false,
    aliases: ['diga', 'fale', 'repita', 'repeat', 'speak'],
    execute(msg, args) {
        if (msg.member.hasPermission("ADMINISTRATOR") || msg.member.hasPermission("MANAGE_MESSAGES")) {
            return msg.channel.send(args.join(' '))
        } else {
            return msg.reply('Desculpe, mas você não tem permissão de usar este comando!')
        }
    }
}