const {EventEmitter} = require('events');

const ee = new EventEmitter();

ee.on('abc',(data1,data2)=>{
    console.log('1-abc事件触发了');
    if(data1){
        console.log(data1)
    }
    if(data2){
        console.log(data2)
    }
})
ee.once('abc',()=>{
    console.log('2-abc事件触发了')
})
ee.on('abc',(data)=>{
    console.log('3-abc事件触发了');
    if(data){
        console.log(data)
    }
})
const f1 = ()=>{
    console.log('f1 bcd 触发了')
};
const f2 = ()=>{
    console.log('f2 bcd 触发了')
}
ee.on('bcd',f1);
ee.on('bcd',f2);

// ee.emit('abc',1,2)
// ee.emit('abc',123)
// ee.emit('abc')
// ee.emit('abc')
// ee.emit('abc')

ee.emit('bcd');
ee.off('bcd',f1);
ee.emit('bcd');

console.log('adkfa')