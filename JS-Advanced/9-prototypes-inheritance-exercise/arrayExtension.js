(function solve() {
    Array.prototype.last = function() {
        return this[this.length - 1];
    };

    Array.prototype.skip = function(n) {
        let newArr = [];

        for(let i = n; i < this.length; i++) {
            newArr.push(this[i]);
        }

        return newArr;
    }

    Array.prototype.take = function(n) {
        let newArr = this.slice(0, n);
        return newArr;
    }

    Array.prototype.sum = function() {
        let sum = this.reduce((prev, curr) => prev + curr, 0);
        return sum;
    }

    Array.prototype.average = function() {
        return this.sum() / this.length;
    }
})();