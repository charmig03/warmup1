function endUp(str){
  if (str.length <= 3) {
    return str.toUpperCase();
  }
  cut = str.length - 3;
  front = str.substring(0, cut);
  back = str.substring(cut);

  return front + back.toUpperCase();
}