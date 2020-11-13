/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {
    swaggerdoc: {
      dirScanner: './app/controller',
      apiInfo: {
        title: 'egg demo接口文档',
        description: '开课吧接口 swagger-ui for egg',
        version: '1.0.0',
      },
      schemes: ['http', 'https'],
      consumes: ['application/json'],
      produces: ['application/json'],
      enableSecurity: false,
      // enableValidate: true,
      routerMap: true,
      enable: true,
    },
    mongoose: {
      url: 'mongodb://root:root@127.0.0.1:27017/egg_x?authSource=admin',
      options: {
        // useMongoClient: true,
        // autoReconnect: true,
        // reconnectTries: Number.MAX_VALUE,
        bufferMaxEntries: 0,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    },
    jwt: {
      secret: 'egg-demo-secret',
      enable: true, // 默认的是false,
      match: /^\/api/, // 遇到接口路径有/api的就进行权限校验
    }
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1605235034508_1095';

  // add your middleware config here
  config.middleware = ['errorHandler'];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
