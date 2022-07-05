function delDel(str){
  if (str.length < 4) {
    return str;
  }
  let output = str;
  if (str.substring(1, 4) == 'del') {
    output = str.substring(0, 1) + str.substring(4, str.length);
  }
  return output;
}