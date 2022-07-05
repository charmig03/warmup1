function posNeg(a, b, negative){
  if (negative === true) {
    return a < 0 && b < 0;
  }
  if ((a < 0 && b > 0) || a > 0 && b < 0) {
    return true;
  } else {
    return false;
  }
}