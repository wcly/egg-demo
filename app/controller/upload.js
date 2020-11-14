const await = require('await-stream-ready/lib/await')
const fs = require('fs')
const path = require('path')
const Controller = require('egg').Controller
const awaitWriteStream = require('await-stream-ready').write
const sendToWormhole = require('stream-wormhole')

/**
 * @Controller 上传
 */
class UploadController extends Controller {
    /**
     * @summary 上传单个文件
     * @description 上传单个文件
     * @router post /api/upload/single
     */
    async create() {
        const { ctx } = this
        // 要通过 ctx.getFileStream 便捷的获取到⽤户上传的⽂件，需要满⾜两个条件：
        // 只⽀持上传⼀个⽂件。
        // 上传⽂件必须在所有其他的 fields 后⾯，否则在拿到⽂件流时可能还获取不到fields。
        const stream = await ctx.getFileStream()
        // 所有表单字段都能通过 `stream.fields` 获取到
        const filename = path.basename(stream.filename)
        const extname = path.extname(stream.filename).toLowerCase()
        const uuid = (Math.random() * 99999).toFixed()
        const target = path.join(this.config.baseDir, 'app/public/uploads', `{uuid}${extname}`)
        const writeStream = fs.createWriteStream(target)
        // 文件处理，上传到云存储等等
        try {
            await awaitWriteStream(stream.pipe(writeStream))
        } catch (err) {
            // 出错要将上传文件流消费掉，不然浏览器会卡死
            await sendToWormhole(stream)
            throw err
        }
        ctx.helper.success({ ctx })
    }
}

module.exports = UploadController