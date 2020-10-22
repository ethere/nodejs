UTC 格林威治时间

时间戳表示的是utc时间的差异，与本地时间没有关系

1. 安装
npm i moment

2. 导入

```js
const moment = require("moment")
```

3. 使用

在服务器建议用moment.utc()

使用日期令牌转换 moment.utc(time,formats,true).toString()

显示（发生在客户端）moment.utc(time,formats,true).local().format(format)  将utc时间按format转为本地时间

moment(time,formats,true).utc().format(format) 将本地时间按format转为utc时间

m.local().fromNow()  距离当前相差的时间

moment.locale("zh-cn") 语言库