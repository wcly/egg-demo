module.exports = {
    loginRequest: {
        mobile: { type: 'string', required: true, description: '手机号', example: '13452445569', format: /^1[34578]\d{9}$/ },
        password: { type: 'string', required: true, description: '密码', example: '111111' }
    }
}