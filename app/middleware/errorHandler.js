'use strict'
module.exports = (options, app) => {
    return async function (ctx, next) {
        try {
            await next();
        } catch (err) {
            // 上报error，框架会自动记录一条错误信息
            app.emit('error', err, this);
            const status = err.status || 500
            // 区分开发环境和生产环境返回的错误信息
            const error = status === 500 && app.config.env === 'prod' ? 'Internal Server Error' : err.message
            ctx.body = {
                code: status,
                error: error,
            }
            // 有效性检查的时候需要返回整个错误信息
            if(status === 442){
                ctx.body.detail = err.errors
            }
            ctx.status = 200
        }
    }
}