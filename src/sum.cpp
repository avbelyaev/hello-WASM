int sum(int* input, int length) {
  int total = 0;
  for (int i = 0; i < length; ++i) {
    total += input[i];
  }
  return total;
}
