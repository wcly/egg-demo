'use strict'
const Service = require('egg').Service

class ActionTokenService extends Service {
    async apply(_id) {
        const { ctx } = this
        // 生成Token
        return ctx.app.jwt.sign({
            data: {
                _id: id
            },
            exp: Math.floor(Data.now() / 1000) + (60 * 60 * 24 * 7)
        }, ctx.app.config.jwt.secret)
    }
}

module.exports = ActionTokenService