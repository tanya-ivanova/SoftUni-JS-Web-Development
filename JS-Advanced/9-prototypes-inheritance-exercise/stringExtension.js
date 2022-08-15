(function extendString() {
    String.prototype.ensureStart = function(str) {
        if(this.startsWith(str)) {
            return this.toString();
        } else {
            return str + this;
        }
    }

    String.prototype.ensureEnd = function(str) {
        if(this.endsWith(str)) {
            return this.toString();
        } else {
            return this + str;
        }
    }

    String.prototype.isEmpty = function() {
        if(this.length === 0) {
            return true;
        } else {
            return false;
        }
    }

    String.prototype.truncate = function(n) {
        let arr = this.split(' ');

        if(this.length <= n) {
            return this.toString();
        } else {
            
            if(arr.length === 1) {
                if(n < 4) {
                    return ('.'.repeat(n));
                } else {
                    let charsToReturn = n - 3;
                    return this.slice(0, charsToReturn).toString() + '...';
                }
            } else {                
                let totalLength = arr.join(' ').length;

                while(totalLength > n - 3) {
                    arr.splice(arr.length - 1, 1);
                    totalLength = arr.join(' ').length;
                }
                
                return arr.join(' ') + '...';                    
            }
        }
    }

    String.format = function(str, ...params) {
        for(let i = 0; i < params.length; i++) {
            let newStr = str.replace(`{${i}}`, params[i]);
            str = newStr;
        }

        return str;
    }
})()

let str = 'my string';
str = str.ensureStart('my');
console.log(str);
str = str.ensureStart('hello ');
console.log(str);
str = str.truncate(16);
console.log(str);
str = str.truncate(14);
console.log(str);
str = str.truncate(8);
console.log(str);
str = str.truncate(4);
console.log(str);
str = str.truncate(2);
console.log(str);
str = String.format('The {0} {1} fox',
  'quick', 'brown');
console.log(str);
str = String.format('jumps {0} {1}',
  'dog');
console.log(str);