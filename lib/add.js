function add(str1, str2) {
  /*   return (parseInt(str1) + parseInt(str2)).toString();
   */
  var res = '',
    temp = 0;
  arr1 = str1.split('');
  arr2 = str2.split('');
  while (arr1.length || arr2.length || temp) {
    var arr1pop = arr1.pop();
    var arr1popVal = ~~arr1pop;
    var arr2pop = arr2.pop();
    var arr2popVal = ~~arr2pop;
    temp += arr1popVal + arr2popVal;
    res = (temp % 10) + res;
    temp = temp > 9;
  }
  return res.replace(/^0+/, '');
}

module.exports = add;