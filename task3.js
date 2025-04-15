let users = [
    { name: "John", email: "john@example.com" },
    { name: "Jason", email: "jason@example.com" },
    { name: "Jeremy", email: "jeremy@example.com" },
    { name: "Jacob", email: "jacob@example.com" }
]
let result = [];
function natija(users) {
    for (let i = 0; i < users.length; i++) {
        result.push(users[i].name);
    }
    console.log(result);
}
natija(users);