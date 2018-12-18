import {
    apiVersion
} from '../package.json';

export const ENV = process.env.NODE_ENV;
// export const API_ENV = process.env.API_ENV;

export const APP_NAME = 'isstore'; // 名称

export const API_VERSION = apiVersion;  // 项目版本号

export const API_HOST = {
    // php那边接口 通常使用这个
    alpha: '//192.168.1.206/mall/seller.php',           // 内测
    beta: '//test.carisok.com/mall/seller.php',         // 公测
    abtest: '//abtest-seller.carisok.com/seller.php',   // 灰度
    release: '//seller.carisok.com/seller.php',         // 正式
};
