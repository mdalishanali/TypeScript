/**
 * before enum
 *const ADMIN=0;
 CONST READ_ONLY=1
 CONST AUTHOR=2
 */
enum Role {
  ADMIN = 5,
  READ_ONLY,
  AUTHOR,
}
const person: {
  name: string;
  age: number;
  skills: string[];
  role: [number, string]; // tuple
  // tuple
  // added by ts fixed length of array

  // enum
  myRole: Role.ADMIN;
  //added by ts automatically enumerated global constant identifiers
} = {
  name: "alishan",
  age: 18,
  skills: ["html", "css", "js", "react"],
  // tuple
  role: [1, "admin"],
  // enum
  myRole: Role.ADMIN,
};
console.log(person.role);

let arr: any[];
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
