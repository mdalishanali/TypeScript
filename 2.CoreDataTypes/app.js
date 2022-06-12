var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY"] = 6] = "READ_ONLY";
    Role[Role["AUTHOR"] = 7] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "alishan",
    age: 18,
    skills: ["html", "css", "js", "react"],
    // tuple
    role: [1, "admin"],
    // enum
    myRole: Role.ADMIN
};
console.log(person.role);
var arr;
arr = [12, "Afd"];
for (var _i = 0, _a = person.skills; _i < _a.length; _i++) {
    var skill = _a[_i];
    console.log(skill.toUpperCase());
}
if (person.myRole === Role.ADMIN) {
    console.log("Awesome bro" + Role.ADMIN);
}
