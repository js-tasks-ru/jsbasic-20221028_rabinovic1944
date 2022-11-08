function truncate(str, maxlength) {
  // ваш код...
  //if (maxlength < 1) { maxlength = 2;}
  if ( str.length <= maxlength ) { return str; }
  else {
    str = str.slice(0, (maxlength - 1)) + '…';
    return str;
  }
}
