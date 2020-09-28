const mongoose = require('mongoose')

// Criando Schema

const GuildsSchema = new mongoose.Schema({
    guildId: {
        type: String,
        required: true,
        unique: true
    },
    guildPrefix: {
        type: String,
        default: '$',
        minlength: 1,
        maxlength: 10
    },
    economy: {
        type: Boolean,
        default: true
    },
    economyChannel: {
        type: String
    },
    welcomeChannel: {
        type: String
    },
    lillyBan: {
        type: Boolean,
        default: false
    }
})

mongoose.model('Guild', GuildsSchema)