const Service = require('egg').Service

class UserService extends Service {
    /**
     * 创建用户
     * @param {*} payload
     */
    async create(payload) {
        const { ctx } = this
        // 将密码进行加密处理
        payload.password = await ctx.genHash(payload.password)
        return ctx.model.User.create(payload)
    }

    /**
     * 根据手机号码查找用户
     * @param {string} mobile 用户手机号码
     */
    async findByMobile(mobile) {
        const { ctx } = this
        return ctx.model.User.find({ mobile })
    }
}

module.exports = UserService