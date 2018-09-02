int sum(int* array, int len) {
  int total = 0;
  for (int i = 0; i < len; ++i) {
    total += array[i];
  }
  return total;
}
