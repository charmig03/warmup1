function intMax(a, b, c){
   max = 0;
  if (a > b) {
    max = a;
  } else {
    max = b;
  }
  if (c > max) {
    max = c;
  }
  return max;
}