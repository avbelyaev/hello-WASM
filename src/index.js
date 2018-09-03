let fib, sum;

const loadAndCompile = (fileName) => {
    return fetch(fileName)
        .then(response => response.arrayBuffer())
        .then(bytes => WebAssembly.compile(bytes));
};

loadAndCompile('src/fib.wasm')
    .then(module => new WebAssembly.Instance(module))
    .then(instance => {
        fib = instance.exports.fib; // name from wat
        console.log(`WASM fib up & running: fib(10) -> ${fib(10)}`);
    });

loadAndCompile('src/mem.wasm')
    .then(module => {
        // memory unit = 64Kb page
        const memory = new WebAssembly.Memory({ initial: 10, maximum: 100 });
        const i32 = new Uint32Array(memory.buffer);
        i32[0] = 1337;

        const obj = {
            exports: {
                memory: memory
            }
        };
        return new WebAssembly.Instance(module, obj);
    })
    .then(instance => {
        sum = instance.exports.mem();
        console.log('WASM sum ready');
    });
