// Javascript 
//  CACH1
var  objeact={
    name:'tung',
    age: 20,
}
var arr=['music','game','ball']
objeact.arr=arr
console.log(objeact.name)
//  CACH2//////////////////////////////////////////////////////////////////
var  objeact={
    name:'tung',
    age: 20,
}
var arr=['music','game','ball']
objeact.arr=arr
console.log(objeact['name'])

//Ngoai  ra ta co the them function  vao object/////////////////////////////////////////////////////////////////////////
var  objeact={
    name:'tung',
    age: 20,
    showName : function(){
        console.log('My Name is '+ this.name +' and I am '+this.age+' years old')
}}
console.log(showName())