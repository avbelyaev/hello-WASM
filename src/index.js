let fib;

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
        fib = instance.exports._Z5w_fibi; // name from fib.wat
        console.log('WASM fib ready');
    });