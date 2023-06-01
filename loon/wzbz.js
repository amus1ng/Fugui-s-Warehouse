*******************************

[rewrite_local]

http-response ^https:\/\/bzpp2\.iwzbz\.com\/api\/v1\.1\/user\/getpwnewios_v script-path=https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/wzbz.js,timeout=10,requires-body = true,tag = 问真八字,enable=true

[mitm] 

hostname = bzpp2.iwzbz.com

*******************************/


var body = $response.body.replace(/vipLevel": 0/g,'vipLevel": 3')
.replace(/expires": "1970-01-01 00:00:00"/g,'expires": "2099-01-01 00:00:00"')
.replace(/vipTipsType": -1/g,'vipTipsType": 0')
$done({ body });