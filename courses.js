class Course {
    constructor(name, credits, department, hasRecaitaiton, hasLab, Prerequisites, preStanding, teachers) {
        this.name = name;
        this.credits = credits;
        this.department = department;
        this.hasRecaitaiton = hasRecaitaiton;
        this.hasLab = hasLab;
        this.Prerequisites = Prerequisites;
        this.credits = credits;
        this.preStanding = preStanding
        this.teachers = teachers
    }
    printPrequisistes(){
        console.log(this.Prerequisites)
    }
}
class Plan{
    constructor(term1, term2, term3, term4, term5, term6, term7,summerTerm ,term9) {
        this.firstTerm = term1;
        this.secondTerm = term2;
        this.thirdterm = term3;
        this.fourthTerm = term4;
        this.fifthTerm = term5;
        this.sixthTerm = term6;
        this.seventhTerm = term7;
        this.summerTerm = summerTerm
        this.ninthTerm = term9
    }
    printPrequisistes(){
        console.log(this.Prerequisites)
    }
}

let math101 = new Course("Math 101" , 4 , "Math Department" , true , false , null ,null , null)
let math102 = new Course("Math 102" , 4 , "Math Department" , true , false , [math101] ,null , null)

let math201 = new Course("Math 201" , 4 , "Math Department" , false , false ,[math102] , null ,null , null)
let math208 = new Course("Math 208" , 4 , "Math Department" , false , false , [math102] ,null , null)

let stat319 = new Course("Stat 319" , 3 , "Math Department" , false , true, [math102] ,null , null)

let eng101 = new Course("Eng 101" , 3 , "English Department" , false , false , null ,null , null)
let eng102 = new Course("Eng 102" , 3 , "English Department" , false , false , [eng101] ,null , null)
let eng214 = new Course("Eng 214" , 3 , "English Department" , false , false , [eng102] ,null , null)
let cgs392 = new Course("CGS 392" , 1 , "English Department" , false , false , [eng214] ,null , null)


let phys101 = new Course("Phys 101" , 4 , "Physics Department" , true , false , null ,null , null)
let phys102 = new Course("Phys 102" , 4 , "Physics Department" , true , false , [phys101] ,null , null)

let chem101 = new Course("Chem 101" , 4 , "Chemical Department" , true , false , null ,null , null)

let ias111 = new Course("IAS 111" , 2 , "Islamic and Arabic Department" , false , false , null ,null , null)
let ias121 = new Course("IAS 121" , 2 , "Islamic and Arabic Department" , false , false , null ,null , null)
let ias212 = new Course("IAS 212" , 2 , "Islamic and Arabic Department" , false , false , null ,null , null)
let iasxxx = new Course("IAS xxx" , 2 , "Islamic and Arabic Department" , false , false , null ,null , null)
let gsxxx = new Course("GS xxx" , 3 , "Global Studies Department" , false , false , null ,null , null)


let pe101 = new Course("PE 101" , 1 , "Physical Education Department" , false , false , null ,null , null)




let bus200 = new Course("BUS 200" , 3 , "Business School" , false , false , null ,null , null)


let ics104 = new Course("ICS 104" , 3 , "Information and Computer Science Department" , false , true, null ,null , null)
let ise291 = new Course("ISE 291" , 3 , "Industrail and System Engineering Department" , false , false , null ,null , null)
let coe292 = new Course("COE 292" , 3 , "Computer Engineering Department" , false , [ise291] , null ,null , null)


let coe233 = new Course("COE 233" , 3 , "Computer Engineering Department" , false , false , [ics104] ,null , null)

let ics108 = new Course("ICS 108" , 4 , "Information and Computer Science Department" , false , true, [ics104] ,null , null)
let ics202 = new Course("ICS 202" , 4 , "Information and Computer Science Department" , false , true, [ics108] ,null , null)
let ics253 = new Course("ICS 202" , 3 , "Information and Computer Science Department" , false , false, [ics104] ,null , null)
let ics321 = new Course("ICS 321" , 3 , "Information and Computer Science Department" , false , false, [ics202] ,null , null)
let ics343 = new Course("ICS 343" , 4 , "Information and Computer Science Department" , false , true, [ics108] ,null , null)
let ics344 = new Course("ICS 344" , 3 , "Information and Computer Science Department" , false , false, [ics343] ,null , null)
let ics433 = new Course("ICS 433" , 3 , "Information and Computer Science Department" , false , false, [coe233] ,null , null)


let swe206 = new Course("SWE 206" , 3 , "Software Engineering Department" , false , true, [ics108] ,null , null)
let swe216 = new Course("SWE 216" , 3 , "Software Engineering Department" , false , false, [swe206] ,null , null)
let swe316 = new Course("SWE 316" , 3 , "Software Engineering Department" , false , false, [swe206] ,null , null)
let swe326 = new Course("SWE 326" , 3 , "Software Engineering Department" , false , false, [swe216] ,null , null)
let swe387 = new Course("SWE 387" , 3 , "Software Engineering Department" , false , false, null ,"junior" , null)
let swe363 = new Course("SWE 363" , 3 , "Software Engineering Department" , false , false, null ,"junior" , null)

let swe399 =  new Course("SWE 399" , 0 , "Software Engineering Department" , false , false, [eng214, swe363] ,null , null)

let swexxx = new Course("SWE XXX" , 3 , "Software Engineering Department" , false , false, null, null , null)
let swe439 =  new Course("SWE 439" , 3 , "Software Engineering Department" , false , false, [stat319, swe316] ,null , null)
let swe411 =  new Course("SWE 411" , 3 , "Software Engineering Department" , false , true, [swe316, swe387] ,null , null)
let swe412 =  new Course("SWE 412" , 2 , "Software Engineering Department" , false , true, [swe411, swe326] ,null , null)



math102.printPrequisistes()