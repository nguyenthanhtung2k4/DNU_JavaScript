var Object1={
     name:'tung',
     age:20,
     adreest:'ha nam'
}

//  Làm việc với  Object 1 
console.log('Lam voi  Object1')
for(var key in Object1){
     console.log(key);// dung de lay name Object
     console.log(Object[key]); // dung de lay  value Object
}
//  Làm việc với Object 2
console.log('Lam voi  Object2')
for(var key of Object.values(Object1)){
     console.log(key);// dung de lay name Object
}
//  Làm việc với Object 3
//  Làm việc với Arr
var Arr=['tung','20','ha nam']
var so=Arr.length;
console.log('Lam voi Arr')
for(let i= 0;i<so;i++){
     console.log(Arr[i])
}
