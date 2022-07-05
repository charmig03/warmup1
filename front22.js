function front22(str){
   take = 2;
  if (take > str.length) {
    take = str.length;
  }
  front = str.substring(0, take);
  return front + str + front; 
}