function struct(name,age,avata){
    this.name=name;
    this.age=age;
    this.avata=avata;
}
var admin= new struct('admin','20','jusst')
admin.bien_new='new_admin'
var canhan= new struct('canhan','20','tung')
canhan.bien_canhan='new_canhan'
console.log(admin,canhan)


//  VớiViệc tạo ra như  z nó sẽ làm cho  ta  tối ưu hóa việc  viết code cx  như chuyên nghiệp  hơn.
//  Nó giống như  Struct(Trong C++)

// /////// ma  tren chuyen sang python 


// class Struct:
//     def __init__(self, name, age, avata):
//         self.name = name
//         self.age = age
//         self.avata = avata

// # Tạo đối tượng admin
// admin = Struct('admin', '20', 'jusst')
// admin.bien_new = 'new_admin'

// # Tạo đối tượng canhan
// canhan = Struct('canhan', '20', 'tung')
// canhan.bien_canhan = 'new_canhan'

// # In thông tin đối tượng admin và canhan
// print(admin.__dict__, canhan.__dict__)
