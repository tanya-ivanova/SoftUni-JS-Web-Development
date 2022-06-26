function movies(input) {
    class Movie {
        constructor(name, director, date) {
            this.name = name;
            this.director = director;
            this.date = date;
        }
    }
    let moviesArr = [];

    while(input.length !== 0) {
        let tokens = input.shift().split(" ");
        let indexOfAddMovie = tokens.indexOf("addMovie");
        let indexOfDirectedBy = tokens.indexOf("directedBy");
        let indexOfOnDate = tokens.indexOf("onDate");

        if (indexOfAddMovie !== -1) {
            let command = tokens[0];
            let name = '';
            for(let i = 1; i < tokens.length; i++) {
                if(i !== tokens.length - 1) {
                    name += tokens[i] + " ";
                } else {
                    name += tokens[i];
                }
            }
            let movieObj = new Movie(name);
            moviesArr.push(movieObj);            
        } else if (indexOfDirectedBy !== -1) {
            let name = '';
            let director = '';
            for(let i = 0; i < indexOfDirectedBy; i++) {
                if(i !== indexOfDirectedBy - 1) {
                    name += tokens[i] + " ";
                } else {
                    name += tokens[i];
                }                
            }
            for (let i = indexOfDirectedBy + 1; i < tokens.length; i++) {
                if(i !== tokens.length - 1) {
                    director += tokens[i] + " ";
                } else {
                    director += tokens[i];
                }
            }
            for(let i = 0; i < moviesArr.length; i++) {
                let currentMovie = moviesArr[i];
                if (currentMovie.name === name) {
                    currentMovie.director = director;                    
                }
            }
        } else if (indexOfOnDate !== -1) {
            let name = '';
            let date = tokens[indexOfOnDate + 1];            
            for (let i = 0; i < indexOfOnDate; i++) {
                if(i !== indexOfOnDate - 1) {
                    name += tokens[i] + " ";
                } else {
                    name += tokens[i];
                }
            }
            for(let i = 0; i < moviesArr.length; i++) {
                let currentMovie = moviesArr[i];
                if (currentMovie.name === name) {
                    currentMovie.date = date;                                        
                }
            }
        }        
    }
    for (let i = 0; i < moviesArr.length; i++) {
        let currentMovie = moviesArr[i];
        if(currentMovie.name !== undefined && currentMovie.director !== undefined && currentMovie.date !== undefined) {
            console.log(JSON.stringify(currentMovie));
        }
    }
}

movies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ]);