// 医院信息页数据
function hospital_info(){
    // 医院名字 格式必须为“XXX医院”
    var name = "ABC医院";

    // 医院介绍信息
    var info = " "+" "+"商丘市第一人民医院是商丘市唯一一所三级甲等综合医院，其前身为加拿大圣公会于1912年创办的圣保罗医院。1951年9月医院由人民政府接管，先后称为商丘专区人民医院、商丘地区人民医院。1997年商丘撤地建市，1998年6月医院更名为商丘市第一人民医院。";
    return [name,info];
}


// 员工信息页数据
function staffInfo(){
    // 员工信息集合，key为姓名，value为职位
    // 修改完该信息后，需要同时修改下方staffInfo函数中的数据
    var staff_info = new Map([
        ['张三','院长'],
        ['李四','内科主任'],
        ['王五','外科主任'],
        ['赵六','口腔科主任'],
        ['林一','儿科主任'],
        ['李二','妇科主任'],
        ['赵四','骨科主任'],
        ['孙六','皮肤科主任'],
        ['田七','消化科主任'],
        ['刘九','内科'],
        ['闫十','儿科']
    ])
    return staff_info;
}
function staffPhoto(){
    // 数组内是员工证件照的文件地址
    var staff_photo_src_arr = [
        "./img/staff_photo1.png",
        "./img/staff_photo1.png",
        "./img/staff_photo1.png",
        "./img/staff_photo1.png",
        "./img/staff_photo1.png",
        "./img/staff_photo1.png",
        "./img/staff_photo1.png",
        "./img/staff_photo1.png",
        "./img/staff_photo1.png",
        "./img/staff_photo1.png",
        "./img/staff_photo1.png",
    ]
    return staff_photo_src_arr; 
}


// 部门管理页所用信息
function getDepName(){
    var staff_info_map = staffInfo();
    var dep_name_set = new Set();

    for(var [key, value] of staff_info_map){
        var dep_name = value;
        var sub_to = dep_name.indexOf("科");
        var need_to_add = dep_name.substring(0,sub_to+1);
        dep_name_set.add(need_to_add);
        if(need_to_add.length == 0){
            dep_name_set.delete(need_to_add);
        }
    }
    // 返回部门名称无重复的Set集合
    return dep_name_set;
}
function getSpeDepStaff(depName){ // 获取指定部门的人员数据
    // depName：科室名
    let staff_info_map = staffInfo();
    var res_map = new Map();
    for(var [key, value] of staff_info_map){
        var dep_name = value;
        var sub_to = dep_name.indexOf("科");
        var need_compare_with = dep_name.substring(0,sub_to+1);
        if(need_compare_with == depName){
            res_map.set(key,value);
        }
    }
    return res_map;
}


// 生成挂号单号
var checkTime = function (i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
function getTimeNum() {
    var nowdate = new Date();
    var year = nowdate.getFullYear(),
        month = nowdate.getMonth() + 1,
        date = nowdate.getDate(),
        day = nowdate.getDay(),
        week = ["07", "01", "02", "03", "04", "05", "06"],
        h = nowdate.getHours(),
        m = nowdate.getMinutes(),
        s = nowdate.getSeconds(),
        month = checkTime(month),
        h = checkTime(h),
        m = checkTime(m),
        s = checkTime(s);
        return year +"1"+ month  + date  + week[day]  + h  + m  + s;
}
function getNowTime() {
    var nowdate = new Date();
    var year = nowdate.getFullYear(),
        month = nowdate.getMonth() + 1,
        date = nowdate.getDate(),
        day = nowdate.getDay(),
        week = ["07", "01", "02", "03", "04", "05", "06"],
        h = nowdate.getHours(),
        m = nowdate.getMinutes(),
        s = nowdate.getSeconds(),
        month = checkTime(month),
        h = checkTime(h),
        m = checkTime(m),
        s = checkTime(s);
        return year +"年"+ month + "月" + date + "日";
}



    window.patient_info = new Array();
        // 就诊日期     挂号单号           姓名    出生日期  电话       就诊类型 科室 接诊医生 收费状态
        patient_info[0] = new Array("2023-02-12","20231021207194631","张三",23,"13622224839","初诊","内科","李四","诊疗费(50.00元)");
        patient_info[1] = new Array("2023-02-14","20231021402152355","钱万里",58,"13642485863","复诊","骨科","赵四","免诊疗费(0.00元)");
        patient_info[2] = new Array("2023-02-14","20231021402163156","赵启和",44,"13928478184","初诊","消化科","田七","诊疗费(50.00元)");
        patient_info[3] = new Array("2023-02-15","20231021503173222","李琦余",30,"13828348422","初诊","妇科","李二","诊疗费(50.00元)");


function getPatientInfo(){
    return patient_info;
}
function addPatientInfo(place,date,num,patient_name,age,phone,type,department,doctor,charge_status){
    patient_info[place] = new Array(date,num,patient_name,age,phone,type,department,doctor,charge_status);
}



window.ward_num_arr = new Array();
    // 病房号
    ward_num_arr.push(1001);
    ward_num_arr.push(1002);
    ward_num_arr.push(1003);
    ward_num_arr.push(1004);
    ward_num_arr.push(2001);
    ward_num_arr.push(2002);
    ward_num_arr.push(2003);
    ward_num_arr.push(2004);
// 病房管理页数据
function getWardNumArr(){
    // 病房号集合
    return window.ward_num_arr;
}
function getWardNumIndex(ward_num){
    // 获取病房号的索引
    var res;
    for(var i = 0; i < ward_num_arr.length; i++){
        if(ward_num_arr[i] == ward_num){
            res = i;
            break;
        }
    }
    return res;
}
function getSpeWardPatientInfo(wardIndex){
    // 获取指定病房的病人姓名
    var allPatientInfo = new Array();
    for(let i = 0; i < 8; i++){
        allPatientInfo[i] = new Array("李进"+i,"林宽"+i,"王莹"+i,"赵玲"+i);
    }    
    return allPatientInfo[wardIndex];
}