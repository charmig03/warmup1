function stringE(str){
  count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == 'e') {
      count++;
    }
  }
  return (count >= 1 && count <= 3); 
}