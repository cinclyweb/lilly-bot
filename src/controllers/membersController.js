const mongoose = require('mongoose')
require('../models/members')

const members = mongoose.model('Member')

module.exports = {
    async indexMember(MemberId) {
        let member
        console.log('Buscando usuário...')
        await members.findOne({ memberId: MemberId }).then(results => {
            console.log('Busca concluída!')

            return member = results
        })
        .catch(err => console.error(`Erro na busca de usuário: ${err}`))

        return member
    },

    async saveMember(member) {
        const memberObj = {
            memberId: member
        }
        
        try { 
            console.log('Criando usuário...')
            
            await members.create(memberObj)
            .then(() => console.log('Usuário criado com sucesso!!'))

        } catch (error) { console.error(error) }
    }
}

