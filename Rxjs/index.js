

let math = {
    number: 0,
    add: function (add) {
        this.number = this.number + add
    }
}
math.add(10);
console.log(math.number);
