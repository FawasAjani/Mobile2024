function count_with_spaces(value:string):number{
return value.length;
}
let count = count_with_spaces("test 1");
console.log(count);

function count_with_no_spaces(value:string):number{
return value.replace("","").length;
}
function count_both(value:string, spaces?:boolean):number{
let count:number =0;
if(spaces){
    count = value.length;

}else{
    count = value.length;
}
  count = value.replace("","").length
return count;
}
let count = count_with_spaces("test 1");
console.log(count);

console.log(count_with_no_spaces("test 1"));
console.log(count_both("Test 1"));
console.log(count_both("Test 1",true));



