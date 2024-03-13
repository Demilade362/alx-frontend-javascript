import { cpp, java, react, cTeacher } from "./subjects";

cpp.setTeacher(cTeacher);
console.log("C++:");
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

java.setTeacher(cTeacher);
console.log("\nJava:");
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

react.setTeacher(cTeacher);
console.log("\nReact:");
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
