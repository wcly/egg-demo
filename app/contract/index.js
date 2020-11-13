module.exports = {
    baseReqeust: {
        id: { type: 'string', description: 'id 唯一键', required: true, example: '1' },
    },
    baseResponse: {
        code: { type: 'integer', required: true, example: 0 },
        data: { type: 'string', exmaple: '成功' },
        errorMessage: { type: 'string', example: '请求成功' }
    }
}