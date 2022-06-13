"use strict";
/**
 * before enum
 *const ADMIN=0;
 CONST READ_ONLY=1
 CONST AUTHOR=2
 */
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY"] = 6] = "READ_ONLY";
    Role[Role["AUTHOR"] = 7] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: "alishan",
    age: 18,
    skills: ["html", "css", "js", "react"],
    // tuple
    role: [1, "admin"],
    // enum
    myRole: Role.ADMIN,
};
console.log(person.role);
let arr;
arr = [12, "Afd"];
for (const skill of person.skills) {
    console.log(skill.toUpperCase());
}
if (person.myRole === Role.ADMIN) {
    console.log("Awesome bro" + Role.ADMIN);
}
/**
//  * core data type
 *number
 string
 booleans
 obj
 array
 tuple
 enum
 any
 */
