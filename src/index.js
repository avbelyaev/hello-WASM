let fib, sum;

const loadWebAssembly = (fileName) => {
    return fetch(fileName)
        .then(response => response.arrayBuffer())
        .then(bytes => WebAssembly.compile(bytes))
        .then(module => {
            return new WebAssembly.Instance(module)
        });
};

loadWebAssembly('src/fib.wasm')
    .then(instance => {
        fib = instance.exports._Z5w_fibi; // name from wat
        console.log(`WASM fib ready and working: fib(10) -> ${fib(10)}`);
    });

loadWebAssembly('src/sum.wasm')
    .then(instance => {
        sum = instance.exports._Z3sumPii;
        console.log('WASM sum ready');
    });