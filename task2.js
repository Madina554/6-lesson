let bir = ({
    D: 1,
    B: 2,
    C: 3
});
function objectToArray(bir) {
    return Object.entries(bir)
}
console.log(objectToArray(bir));