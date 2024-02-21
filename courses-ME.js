var fs = require("fs");
class Course {
  constructor(
    name,
    credits,
    hasRecaitaiton,
    hasLab,
    PreRequisites,
    postRequisites,
    preStanding
  ) {
    this.name = name;
    this.credits = credits;
    this.hasRecaitaiton = hasRecaitaiton;
    this.hasLab = hasLab;
    this.PreRequisites = PreRequisites;
    this.postRequisites = postRequisites;
    this.preStanding = preStanding;
  }
  // printPrequisistes(){
  //     console.log(this.Prerequisites)
  // }
}

let math101 = new Course("MATH 101", 4, true, false, null, ["MATH 102"], null);
let math102 = new Course(
  "MATH 102",
  4,
  true,
  false,
  ["MATH 101"],
  [
    "MATH 201",
    "MATH 208",
    "STAT 319",
    "EE 234",
    "EE 235",
    "ME 203",
    "ME 216",
    "ME 217",
  ],
  null
);

let math201 = new Course(
  "MATH 201",
  4,
  false,
  false,
  ["MATH 102"],
  ["ME 311", "MATH 371"],
  null
);
let math208 = new Course(
  "MATH 208",
  4,
  false,
  false,
  ["MATH 102"],
  ["ME 401", "ME 402"],
  null
);
let stat319 = new Course(
  "STAT 319",
  3,
  false,
  true,
  ["MATH 102"],
  null,
  null,
  null
);

math371 = new Course("MATH 371", 3, false, false, ["MATH 201"], null, null);
let eng101 = new Course("Eng 101", 3, false, false, null, ["Eng 102"], null);
let eng102 = new Course(
  "Eng 102",
  3,
  false,
  false,
  ["Eng 101"],
  ["Eng 214"],
  null
);
let eng214 = new Course(
  "Eng 214",
  3,
  false,
  false,
  ["Eng 102"],
  ["CGS 392", "ME 399"],
  null
);
let cgs392 = new Course("CGS 392", 1, false, false, ["Eng 214"], null, null);

let ias111 = new Course("IAS 111", 2, false, false, null, ["IAS 212"], null);
let ias121 = new Course("IAS 121", 2, false, false, null, null, null);
let ias212 = new Course(
  "IAS 212",
  2,
  false,
  false,
  ["IAS 111"],
  ["IAS xxx"],
  null
);
let iasxxx = new Course("IAS xxx", 2, false, false, ["IAS 212"], null, null);
let gsxxx = new Course("GS xxx", 3, false, false, null, null, null);

let chem101 = new Course(
  "Chem 101",
  4,
  true,
  false,
  null,
  ["ME 216", "ME 217"],
  null
);

let pe101 = new Course("PE 101", 1, false, false, null, null, null);
let bus200 = new Course(
  "BUS 200",
  3,
  false,
  false,
  null,
  ["ME 399", "ME 411"],
  null
);

let ics104 = new Course(
  "ICS 104",
  3,
  false,
  true,
  null,
  ["ISE 291"],
  null,
  null
);
let ise291 = new Course(
  "ISE 291",
  3,
  false,
  false,
  ["ICS 104"],
  ["COE 292"],
  null,
  null
);
let coe292 = new Course(
  "COE 292",
  3,
  false,
  null,
  ["ISE 291"],
  null,
  null,
  null
);
let phys101 = new Course(
  "Phys 101",
  4,
  true,
  false,
  null,
  ["Phys 102", "CE 202"],
  null,
  null
);
let phys102 = new Course(
  "Phys 102",
  4,
  true,
  false,
  ["Phys 101"],
  ["ME 218", "ME 203", "EE 234", "EE 235"],
  null,
  null
);

let ce202 = new Course(
  "CE 202",
  3,
  false,
  false,
  ["Phys 101"],
  ["ME 301", "ME 201"],
  null
);

let me203 = new Course(
  "ME 203",
  3,
  false,
  false,
  ["Phys 102", "MATH 102"],
  ["ME 204", "ME 311"],
  null
);

let me210 = new Course(
  "ME 210",
  3,
  false,
  false,
  null,
  ["ME 218", "ME 322", "ME 323"],
  null
);
let me216 = new Course(
  "ME 216",
  1,
  false,
  false,
  ["Chem 101", "MATH 102"],
  ["ME 322", "ME 323"],
  null
);
let me217 = new Course(
  "ME 217",
  1,
  false,
  false,
  ["Chem 101", "MATH 102"],
  ["ME 322", "ME 323"],
  null
);

let me201 = new Course("ME 201", 3, false, false, ["CE 202"], ["ME 311"], null);
let me204 = new Course(
  "ME 204",
  3,
  false,
  false,
  ["ME 203"],
  ["ME 315", "ME 316", "ME 399"],
  null
);
let me218 = new Course(
  "ME 218",
  2,
  false,
  false,
  ["Phys 102", "ME 210"],
  ["ME 301"],
  null
);
let me301 = new Course(
  "ME 301",
  3,
  false,
  false,
  ["CE 202", "ME 218"],
  ["ME 302", "ME 303"],
  null
);
let me311 = new Course(
  "ME 311",
  3,
  false,
  false,
  ["MATH 201", "ME 201", "ME 203"],
  ["ME 315", "ME 316"],
  null
);
let me322 = new Course(
  "ME 322",
  3,
  false,
  false,
  ["ME 210", "ME 216", "ME 217"],
  null,
  null
);
let me323 = new Course(
  "ME 323",
  1,
  false,
  false,
  ["ME 210", "ME 216", "ME 217"],
  null,
  null
);
let me302 = new Course("ME 302", 3, false, false, ["ME 301"], null, null);
let me303 = new Course("ME 303", 1, false, false, ["ME 301"], null, null);

let me315 = new Course(
  "ME 315",
  3,
  false,
  false,
  ["ME 204", "ME 311"],
  ["ME 401", "ME 402", "ME 411"],
  null
);
let me316 = new Course(
  "ME 316",
  1,
  false,
  false,
  ["ME 204", "ME 311"],
  ["ME 401", "ME 402", "ME 411"],
  null
);
let me399 = new Course(
  "ME 399",
  0,
  false,
  false,
  ["BUS 200", "Eng 214", "ME 204"],
  null,
  null
);

let me401 = new Course(
  "ME 401",
  3,
  false,
  false,
  ["EE 234", "EE 235", "MATH 208", "ME 315", "ME 316"],
  null,
  null
);
let me402 = new Course(
  "ME 402",
  3,
  false,
  false,
  ["EE 234", "EE 235", "MATH 208", "ME 315", "ME 316"],
  null,
  null
);

let me411 = new Course(
  "ME 411",
  0,
  false,
  false,
  ["BUS 200", "ME 315", "ME 316"],
  ["ME 412"],
  null
);
let me412 = new Course("ME 412", 3, false, false, ["ME 411"], null, null);

let me4xx1 = new Course("ME 4xx-1", 3, false, false, null, null, null);
let me4xx2 = new Course("ME 4xx-2", 3, false, false, null, null, null);
let me4xx3 = new Course("ME 4xx-3", 3, false, false, null, null, null);
let me4xx4 = new Course("ME 4xx-4", 3, false, false, null, null, null);
let ee234 = new Course(
  "EE 234",
  3,
  false,
  false,
  ["MATH 102", "Phys 102"],
  ["ME 401", "ME 402"],
  null
);
let ee235 = new Course(
  "EE 235",
  1,
  false,
  false,
  ["MATH 102", "Phys 102"],
  ["ME 401", "ME 402"],
  null
);

let allCourses = [
  math101,
  math102,
  math201,
  math208,
  stat319,
  math371,
  eng101,
  eng102,
  eng214,
  cgs392,
  ias111,
  ias121,
  ias212,
  iasxxx,
  gsxxx,
  chem101,
  pe101,
  bus200,
  ics104,
  ise291,
  coe292,
  phys101,
  phys102,
  ce202,
  me203,
  me210,
  me216,
  me217,
  me201,
  me204,
  me218,
  me301,
  me311,
  me322,
  me323,
  me302,
  me303,
  me315,
  me316,
  me399,
  me401,
  me402,
  me411,
  me412,
  me4xx1,
  me4xx2,
  me4xx3,
  me4xx4,
  ee234,
  ee235,
];

let MEPlan = [];

MEPlan.push([chem101, eng101, math101, phys101, ias121, pe101]);
MEPlan.push([eng102, ics104, math102, phys102, ias111]);
MEPlan.push([ce202, math201, me203, me210, me216, , me217]);
MEPlan.push([eng214, ise291, math208, me204, me201, me218]);
MEPlan.push([coe292, ee234, ee235, me301, me311, me322, me323]);
MEPlan.push([bus200, cgs392, ias212, stat319, me302, me303, me315, me316]);
MEPlan.push([me399]);
MEPlan.push([math371, , me401, me402, me411, me412, me4xx1, me4xx2]);
MEPlan.push([gsxxx, iasxxx, me412, me4xx3, me4xx4]);

let sweStringified = JSON.stringify(MEPlan, null, 3);
fs.writeFile("ME-plan.json", sweStringified, function (err) {
  if (err) throw err;
  console.log("complete");
});
function checkConsistency(courses) {
  for (let course of courses) {
    for (let preReq of course.PreRequisites || []) {
      let preReqCourse = courses.find((c) => c.name === preReq);
      if (
        preReqCourse &&
        !(preReqCourse.postRequisites || []).includes(course.name)
      ) {
        console.log(
          `Inconsistency: ${course.name} is not listed as a postrequisite in ${preReqCourse.name}`
        );
      }
    }
    for (let postReq of course.postRequisites || []) {
      let postReqCourse = courses.find((c) => c.name === postReq);
      if (
        postReqCourse &&
        !(postReqCourse.PreRequisites || []).includes(course.name)
      ) {
        console.log(
          `Inconsistency: ${course.name} is not listed as a prerequisite in ${postReqCourse.name}`
        );
      }
    }
  }
}

checkConsistency(allCourses);
