const moment = require("moment");
moment.locale("zh-cn")
// console.log(moment().toString());
// console.log(moment.utc().toString());

// console.log(moment().valueOf(),+moment());
// console.log(moment.utc().valueOf(),+moment.utc());

// console.log(moment(0).toString(),+moment(0));
// console.log(moment.utc(0).toString(),+moment.utc(0));

// const value = '1999-10-19 00:00:00';
// console.log(moment(value).toString(),+moment(value));
// console.log(moment.utc(value).toString(),+moment.utc(value));

const formats = ["YYYY-MM-DD HH:mm:ss","YYYY-M-D H:m:s","x"];
// console.log(moment.utc("1979-12-01 00:00:00",formats,true).toString());
// console.log(moment.utc("1970-1-1 0:0:0",formats,true).toString());
// console.log(moment.utc(0,formats,true).toString());
// console.log(moment.utc("Thu Jan 01 1970 00:00:00 GMT+0000",formats,true).toString());

// const m = moment.utc("2015-1-5 23:00:01",formats,true);
// console.log(m.format("YYYY年MM月DD日 HH点mm分ss秒"));
// console.log(m.local().format("YYYY年MM月DD日 HH点mm分ss秒"));
// const local = moment("2015-1-5 23:00:00",formats,true);
// console.log(local.utc().format("YYYY年MM月DD日 HH点mm分ss秒"))

// const m = moment.utc("2020-4-14 9:00:01",formats,true);
// console.log(m.local().fromNow())