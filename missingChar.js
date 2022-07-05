function missingChar(str, n){
   front = str.substring(0, n);
  back = str.substring(n + 1, str.length);
  return front + back;
}