function phong(so_nguoi,so_dien,so_nuoc,so_xe){
     this.so_nguoi=so_nguoi;
     this.so_dien=so_dien;
     this.so_nuoc=so_nuoc;
     this.so_xe=so_xe;
}
phong.prototype.dia_chi='Ha nam';
function lap(phong,so){
     var str=' ';
     for (var i=0;i< so.length ;i++){
          str+=phong.so_nguoi[i]+' ';
     }
     console.log(str,'\n',phong.dia_chi,'\n','tong tien dien la: '+phong.so_dien*23,'\n','tong so tien nuoc la: '+phong.so_nuoc*3)
     console.log('so xe cua phong :'+phong.so_xe)     
}
var p1=new phong(5,12,40,90,'toyoTa')
var p2=new phong(5,12,40,90,'toyoTa')
var p3=new phong(5,12,40,90,'toyoTa')
var p4=new phong(5,12,40,90,'toyoTa')
p1.so_nguoi=['hung','nam','tuan','manh','quang']
p2.so_nguoi=['thanh','thuam','thu','binh','duong']
p3.so_nguoi=['long','yen','nam','quoc','quyen']
p4.so_nguoi=['vuong','tao','hung','vuong','hanh']
lap(p1,p1.so_nguoi)
lap(p2,p2.so_nguoi)
lap(p3,p3.so_nguoi)
lap(p4,p4.so_nguoi)