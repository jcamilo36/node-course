function createAdder(baseNumber) {
	function toAdd(numberToAdd) {
		return baseNumber + numberToAdd;
	}
	return toAdd;
}
var addTen = createAdder(10);
console.log(addTen(2));
console.log(addTen(0));
