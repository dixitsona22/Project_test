/** @format */
let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap() {
  const itemYouWant = array.map( (item) => {
    if (item.profession === 'developer') {
       console.log(itemYouWant);
    }
 });   
}

function PrintDeveloperbyForEach() {
  //Write your code here
  arr.forEach( (item) => {
    if (item.profession === 'developer') {
          console.log(item);
    }
  });
}

function addData() {
  //Write your code here
    var b =   {id:4,name:"susan",age:"20",profession:"intern"};
    arr.push(b);   
    console.log(arr);
 }

function removeAdmin() {
  //Write your code here
  
}
function concatenateArray() {
  //Write your code here
  let arr1 = [
  { id: 4, name: "jay", age: "40", profession: "developer" },
  { id: 5, name: "shyam", age: "26", profession: "intern" },
  { id: 6, name: "ram", age: "43", profession: "intern" },
];
  var a = arr1[0];
  var b = arr1[1];
  var c = arr[2];
  arr.push(a);
  arr.push(b);
  arr.push(c);
  console.log(arr);
}
