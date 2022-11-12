
const courseList = [
    {code: "ACIT 1620", 
    name: "Web Fundamental Technologies"},

    {code: "ACIT 1420", 
    name: "Introduction to Systems Administration"},

    {code: "ACIT 1630",
     name: "Database Systems"},
     
]

let input = ""
do {
    input = prompt ("Please enter a 4-digit number: ");
    console.log(input);
}
while (input.length != 4 || !NaN(Number(input)))