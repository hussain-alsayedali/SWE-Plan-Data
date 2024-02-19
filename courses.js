var fs = require("fs");
class Course {
  constructor(
    name,
    credits,
    hasRecaitaiton,
    hasLab,
    PreRequisites,
    postRequisites,
    preStanding,
    teachers
  ) {
    this.name = name;
    this.credits = credits;
    this.hasRecaitaiton = hasRecaitaiton;
    this.hasLab = hasLab;
    this.PreRequisites = PreRequisites;
    this.postRequisites = postRequisites;
    this.preStanding = preStanding;
    this.teachers = teachers;
  }
  // printPrequisistes(){
  //     console.log(this.Prerequisites)
  // }
}
class Plan {
  constructor(
    term1,
    term2,
    term3,
    term4,
    term5,
    term6,
    summerTerm,
    term7,
    term8
  ) {
    this.firstTerm = term1;
    this.secondTerm = term2;
    this.thirdterm = term3;
    this.fourthTerm = term4;
    this.fifthTerm = term5;
    this.sixthTerm = term6;
    this.summerTerm = summerTerm;
    this.seventhTerm = term7;
    this.eighthTerm = term8;
  }
}

let math101 = new Course(
  "Math 101",
  4,
  true,
  false,
  null,
  ["math102"],
  null,
  null
);
let math102 = new Course(
  "Math 102",
  4,
  true,
  false,
  [math101],
  ["math201", "math208"],
  null,
  null
);

let math201 = new Course(
  "Math 201",
  4,
  false,
  false,
  [math102],
  null,
  null,
  null
);
let math208 = new Course("Math 208", 4, false, false, ["math102"], null, null);

let stat319 = new Course(
  "Stat 319",
  3,
  false,
  true,
  [math102],
  ["swe439"],
  null,
  null
);

let eng101 = new Course(
  "Eng 101",
  3,
  false,
  false,
  null,
  ["eng102"],
  null,
  null
);
let eng102 = new Course(
  "Eng 102",
  3,
  false,
  false,
  [eng101],
  ["eng214"],
  null,
  null
);
let eng214 = new Course(
  "Eng 214",
  3,
  false,
  false,
  [eng102],
  ["cgs392"],
  null,
  null
);
let cgs392 = new Course("CGS 392", 1, false, false, [eng214], null, null, null);

let phys101 = new Course(
  "Phys 101",
  4,
  true,
  false,
  null,
  ["phys102"],
  null,
  null
);
let phys102 = new Course(
  "Phys 102",
  4,
  true,
  false,
  [phys101],
  null,
  null,
  null
);

let chem101 = new Course("Chem 101", 4, true, false, null, null, null, null);

let ias111 = new Course("IAS 111", 2, false, false, null, null, null, null);
let ias121 = new Course("IAS 121", 2, false, false, null, null, null, null);
let ias212 = new Course("IAS 212", 2, false, false, null, null, null, null);
let iasxxx = new Course("IAS xxx", 2, false, false, null, null, null, null);
let gsxxx = new Course("GS xxx", 3, false, false, null, null, null, null);

let pe101 = new Course("PE 101", 1, false, false, null, null, null, null);

let bus200 = new Course("BUS 200", 3, false, false, null, null, null, null);

let ics104 = new Course(
  "ICS 104",
  3,
  false,
  true,
  null,
  ["ise291", "ics108", "ics253", "coe233"],
  null,
  null
);
let ise291 = new Course(
  "ISE 291",
  3,
  false,
  false,
  null,
  ["coe292"],
  null,
  null
);
let coe292 = new Course("COE 292", 3, false, [ise291], null, null, null, null);

let coe233 = new Course(
  "COE 233",
  3,
  false,
  false,
  [ics104],
  ["ics433"],
  null,
  null
);

let ics108 = new Course(
  "ICS 108",
  4,
  false,
  true,
  [ics104],
  ["swe206", "ics202", "ics343"],
  null,
  null
);
let ics202 = new Course(
  "ICS 202",
  4,
  false,
  true,
  [ics108],
  ["ics321"],
  null,
  null
);
let ics253 = new Course("ICS 202", 3, false, false, [ics104], null, null, null);
let ics321 = new Course("ICS 321", 3, false, false, [ics202], null, null, null);
let ics343 = new Course(
  "ICS 343",
  4,
  false,
  true,
  [ics108],
  ["ics344"],
  null,
  null
);
let ics344 = new Course("ICS 344", 3, false, false, [ics343], null, null, null);
let ics433 = new Course("ICS 433", 3, false, false, [coe233], null, null, null);

let swe206 = new Course(
  "SWE 206",
  3,
  false,
  true,
  [ics108],
  ["swe216", "swe316"],
  null,
  null
);
let swe216 = new Course(
  "SWE 216",
  3,
  false,
  false,
  [swe206],
  ["swe326"],
  null,
  null
);
let swe316 = new Course(
  "SWE 316",
  3,
  false,
  false,
  [swe206],
  ["swe439", "swe411"],
  null,
  null
);
let swe326 = new Course(
  "SWE 326",
  3,
  false,
  false,
  [swe216],
  ["swe412"],
  null,
  null
);
let swe387 = new Course(
  "SWE 387",
  3,
  false,
  false,
  null,
  ["swe411"],
  "junior",
  null
);
let swe363 = new Course("SWE 363", 3, false, false, null, null, "junior", null);

let swe399 = new Course(
  "SWE 399",
  0,
  false,
  false,
  [eng214, swe363],
  null,
  null,
  null
);

let swexxx = new Course("SWE XXX", 3, false, false, null, null, null);
let swe439 = new Course(
  "SWE 439",
  3,
  false,
  false,
  [stat319, swe316],
  null,
  null,
  null
);
let swe411 = new Course(
  "SWE 411",
  3,
  false,
  true,
  [swe316, swe387],
  ["swe412"],
  null,
  null
);
let swe412 = new Course(
  "SWE 412",
  2,
  false,
  true,
  [swe411, swe326],
  null,
  null,
  null
);

// math102.printPrequisistes()
let swePlan = [];
swePlan.push([math101, eng101, pe101, ics104, phys101, ias111]);
swePlan.push([math102, eng102, ics108, phys102, ias121]);
swePlan.push([math201, ise291, swe206, ics202, chem101, ias212]);
swePlan.push([math208, coe292, swe216, ics253, coe233]);
swePlan.push([stat319, swe316, ics321, ics343, swe387, bus200]);
swePlan.push([swe363, eng214, swe326, ics344, cgs392]);
swePlan.push([swe399]);
swePlan.push([swexxx, swexxx, swe439, swe411, iasxxx]);
swePlan.push([swexxx, swexxx, swe412, ics433, gsxxx]);

let sweStringified = JSON.stringify(swePlan, null, 3);
fs.writeFile("SWE-plan.json", sweStringified, function (err) {
  if (err) throw err;
  console.log("complete");
});
