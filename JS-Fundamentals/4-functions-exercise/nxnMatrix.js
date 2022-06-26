function nxnMatrix (n) {
    for (let i = 0; i < n; i++) {
        let sequence = "";
        for (let j = 0; j < n; j++) {
            sequence += n + " ";            
        }
        console.log(sequence);
    }
}

nxnMatrix(3);