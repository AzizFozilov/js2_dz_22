var num1 = +prompt('son kiriting');
var num2 = +prompt('son kiriting');
var num3 = +prompt('son kiriting');
if(num1<num2<num3){console.log(num2);}
else if(num2<num1<num3){console.log(num1);}
else if(num3<num2<num1){console.log(num2);}
else if(num3<num1<num2){console.log(num1);}
else if(num2<num3<num1){console.log(num3);}
else if(num1<num3<num2){console.log(num3);}