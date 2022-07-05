function close10(a, b){
    aDiff = Math.abs(a - 10);
  bDiff = Math.abs(b - 10);

  if (aDiff < bDiff) {
    return a;
  }
  if (bDiff < aDiff) {
    return b;
  }
  return 0;
}