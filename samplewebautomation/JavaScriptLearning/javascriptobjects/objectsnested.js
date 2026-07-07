// Case 3: Array of object

let students=[

    {

        "rollno":101,

        "fname":"Santosh",

        "age":22,

        "course":"Physics"

    },

    {

        "rollno":102,

        "fname":"Adams",

        "age":24,

        "course":"Chemistry"

    },

    {

        "rollno":103,

        "fname":"Jones",

        "age":23,

        "course":"Maths"

    }

]
 
//Read Property values

console.log(students[0].rollno);

console.log(students[0].fname);

console.log(students[0].age);

console.log(students[0].course);

console.log(students[1].rollno);

console.log(students[1].fname);

console.log(students[1].age);

console.log(students[1].course);

console.log(students[2]["rollno"]);

console.log(students[2]["fname"]);

console.log(students[2]["age"]);

console.log(students[2]["course"]);
 
 
// case 4: Nested JavaScript Objects

let student={

    "santu":{

        "rollno":101,

        "sname":"Santosh",

        "age":22,

        "course":"Physics"

    },

    "viky":{

        "rollno":102,

        "sname":"Vikram",

        "age":24,

        "course":"Chemistry"

    }

}
 
console.log(student.santu.rollno);

console.log(student.santu.sname);

console.log(student.santu.age);

console.log(student.santu.course);

console.log(student.viky.rollno);

console.log(student.viky.sname);

console.log(student.viky.age);

console.log(student.viky.course);
 
 