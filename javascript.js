// alert("Import"); 
var name = "ข้อความ";
var number = "9";
var array = [1,2,,3];
var a = new Array();
a[0] = 5;
a[1] = "array";

// if(nametwo === namethree){
//     console.log("เท่ากัน");
// }

//var , let ค่าจะเหมือนๆกันต่างกันตรงพวก scope
//var scope จะกว้างกว่า let

let nametwo = "จารุวรรณ";
var object = {size: 10, name : "Dedo" };
console.log(object.size);
console.log(object.name);

console.log(name, number, array, nametwo, object);

name = 10;
console.log(name);

var st = "10";
console.log(st + 8); // output 108 string

var st = "10";
console.log(parseInt(st) + 8); 

st = 10;
console.log(st+8); //output 18 number

 function functionName(){

}

const c = "const จะแก้ไม่ได้";
console.log(c);

var f = function () {
    console.log("มีการเรียกฟังก์ชัน")
}
f();



var x = 100;
var y = 100;
if(x > y)
{
    console.log("x > y");
}
else if(x < y)
{
    console.log("x < y");
}
else
{
    console.log("x = y");
}


//default; coondition; การเพิ่ม-ลดแต่ละรูป
for(var i=10; i>0; i--)
{
    console.log(i);
}