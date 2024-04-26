var  arr=[
     {name:'tung',age:'1'},{name:'tung',age:'12'},{name:'tung',age:'15'},
]
var tim= arr.filter(function(arr,index){
     // console.log(index)
     return arr.name == 'tung';
})
console.table({
     'ting':1,
     'tung':'tung'
})