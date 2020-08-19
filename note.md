nodejs的底层用的是libuv这个库，c++编写的，用于操作底层

timers 检查计时器线程， 一个计时器一个计时器去看去运算时间  setTimeout
- setTimeout最小为1，写0即为1
check  一个队列，直接执行，效率要比timers要高的多  setImmediate

nextTick的优先级大于Promise，nextTick和Promise的优先级大于其他的队列，相当于浏览器中的微队列

做任何一个回调前都会检查下nextTick和Promise是否空