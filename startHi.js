function startHi(str){
    if (str.length < 2) {
    return false;
  }
  front = str.substring(0, 2);
  if (front == 'hi') {
    return true;
  } else {
    return false;
  }
}