let people = 
    {
    "Joel" : 32,
    "Fred" : 44,
    "Reginald" : 65,
    "Susan" : 33,
    "Julian": 13,
    "Baby": 2,
    "Child": 8,
    "Teenager": 15,
    "Adult": 25,
    "Elderly": 71
}
function afterNYears(people, n) {
    let result = {};
    for (let person in people) {
        result[person] = people[person] + Math.abs(n);
    }
    return result;
}
console.log(afterNYears(people,3))