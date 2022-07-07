// class RectangleClass {
//     constructor(length,width,rightside,leftside,){
//         this.length = length;
//         this.width = width;
//        this.leftside = leftside;
//        this.rightside = rightside;
//     }
//     get getarea(){
//         return this.width + this.length;
//     }
//     get getPerimeter(){
//         return  this.leftside + this.rightside;
//     }
   
// }
// let Rectangle = new  RectangleClass("100sm", "130sm", " aj koxm"," dzax koxm");
//    console.log(Rectangle);






    class PersonClass {
            constructor( firstName,LastName,Gender,Age){
             this.firstName = firstName;
             this.LastName = LastName;
             this.Gender = Gender;
             this.Age = Age;

            }
            get Name (){
                return this.firstName;
            }
            get Surname (){
                return this.LastName;
            }
            set SetGender ( NewGender) {
                    this.Gender = NewGender;
            }
            set SetAge ( NewAge ){
                this.Age = NewAge;
            } 

            toString(){
                return ( this.firstName + " " + this.LastName + " " + this.Gender + " " + this.Age);
            }
    }
    let person = new PersonClass("Petros", "Petrosyan", "Man", "26");
    console.log(person);




    class Student{
        constructor(Text,String,lastname){
            this.Text =Text;
            this.String = String;
            this.lastname = lastname;
        }
        get text () {
            return this.text;
        }
        get string (){
            return this.string;
        }
        get surname(){
            return this.lastname;
        }
        
        toString(){
            return (this.Text + this.string + this.lastname) ;
        }
    
    }
   Student.prototype = PersonClass; 
    let student = new Student("Mathematic", "are the student's subjects that he studies"," in the 3th year");
    
    console.log(student);


    class Teacher{
        constructor(Start, Center){
            this.Start = Start;
            this.Center = Center;
        }
        get start (){
            return this.Start;
        }
        get center (){
            return this.Center;
        }
        toString(){
            return ( this.Start + this.Center)
        }
    }
    Teacher.prototype = PersonClass;
    let teacher = new Teacher("Mathematic,Chess,geography"," are the subjects he teaches ");

    console.log(teacher);
