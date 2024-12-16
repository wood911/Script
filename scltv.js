/*************************************

 项目名称：山茶录TV-去广告
 下载地址：appstore正版/iosgod破解版
 脚本作者：wood911
 使用声明：⚠️仅供参考，🈲转载与售卖！

 **************************************

 [rewrite_local]
 ^https?:\/\/.*\.meituan\.net\/.+ url script-response-body https://raw.githubusercontent.com/wood911/Advertising/main/scltv.js
 [mitm]
 hostname =eafe8.playfabapi.com
 *************************************/
let body = $response.body;
var data = JSON.parse(body);

// 控制广告的接口路径
const list = [
    'meituan.net',
    'douyinpic.com',
    'toutiao.com',
    'toutiao1.com',
    'toutiao-b.com',
    'douyinpic.com',
];

// 检查当前请求的URL
const currentURL = $request.url;
// 检查需要修改响应的条件
if (list.find(e => url.includes(e)) !== undefined) {
    data = {};
}

body = JSON.stringify(data);
$done({body});
