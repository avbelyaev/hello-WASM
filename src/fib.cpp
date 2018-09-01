int w_fib(int n) {
    if (0 == n) {
        return 0;

    } else if (1 == n) {
        return 1;

    } else {
        return w_fib(n - 1) + w_fib(n - 2);
    }
}