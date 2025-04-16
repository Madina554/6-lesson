let student = [];
let datbase = {
    read() {
        console.log(student);
    },
    create(user) {
        let find = student.filter((val) => val.name == user.name);
        if (find.length) {
            console.log("Bu user avval qoshilgan");
            return 0;
        } else {
            student.push(user);
            console.log("Student muvvofaqiyatli qoshildi");
        }
    },
    update(name, user) {
        let findIndex = student.findIndex((val) => val.name == name);
        if (findIndex == -1) {
            console.log("Yangilanishi kerak bolgan user topilmadi!");
            return 0;
        }
        student[findIndex] = {
            ...student[findIndex],
            ...user
        };
        console.log(`Student yangilandi: ${student[findIndex]}`);
    },        
    delete(name) {
        student = student.filter((val) => name != name);
        console.log("Student ichirildi");
    },

    bir(name) {
        for (let i = 0; i <= student.length; i++) {
            if (name == student.name[i]) {
                console.log(student);
            }
        } 
    }
}

function pagination(list, gap) {
    // for (let i = list * (gap - 1); i < (list * gap) + 1;i++){
    //     console.log(list[i]);
    // }
    let natija = student.slice(list * (gap - 1), (list * gap) + 1);
    console.log(natija);
}
console.log(pagination(student, 3));