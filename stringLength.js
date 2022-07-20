function stringLength(string) {
    const myString = string.replace(/ /g, '');
    if (myString.length > 1 && myString.length < 10) {
      return myString.length;
    }
  
}
module.exports = stringLength;
