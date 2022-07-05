function everyNth(str, n){
   result = '';
  for (let i = 0; i < str.length; i = i + n) {
    result = result + str.charAt(i);
  }
  return result;
}
