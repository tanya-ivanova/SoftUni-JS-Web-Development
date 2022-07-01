function createSortedList () {
    let sortedList = {
        list: [],
        size: 0        
    }    

    sortedList.add = (element) => {
        sortedList.list.push(element);
        sortedList.size++;
        sortedList.list.sort((a, b) => a - b);
    }

    sortedList.remove = (index) => {
        if (index >= 0 && index < sortedList.list.length) {
            sortedList.list.splice(index, 1);            
            sortedList.size--;
        } else {
            return;
        }
    }

    sortedList.get = (ind) => {
        if (ind >= 0 && ind < sortedList.list.length) {
        return sortedList.list[ind];
        } else {
            return;
        }
    }

    return sortedList;
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));

console.log(list);