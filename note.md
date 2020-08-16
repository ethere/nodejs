导入模块使用绝对路径

如果使用的是相对路径，最终也会转为绝对路径

入口模块的id为```.```

require.resolve(path) 返回path的绝对路径

require原理

1. 将路径转为绝对路径
2. 查找缓存，有缓存直接返回缓存中的结果，如果没有缓存执行第三步
3. 将代码放到一个函数
4. 定义module.exports为一个对象，并定义exoprts = module.exports
5. 函数执行，改变this为module.exports，初始时,exports === module.exports === this
 
```js
//伪代码
function require(path){
    //将path转为绝对路径
    //查看是否有缓存
    if(require.cache[path]){
        return module.cache[path].result;
    }
    function _temp(module,exports,require,__dirname,__filename){
        //路径文件中的代码
    }
    module.exports = {};
    let exports = module.exports;
    _temp.call(module.exports,module,exports,require,module.path,module.filename)
}
require.cache = {}
```
 