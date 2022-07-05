function front3(str){
   front = '';
  if (str.length >= 3) {
    front = str.substring(0, 3);
  } else {
    front = str;
  }
  return front + front + front;
}