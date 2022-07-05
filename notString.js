function notString(str){
   if (str === null || str === undefined || str.substring(0, 3) === 'not') {
    return str;
  }
  return `not ${str}`;
}