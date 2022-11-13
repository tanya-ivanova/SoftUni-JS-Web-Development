const mongoose = require('mongoose');
const Person = require('./models/Person');

const connectionString = 'mongodb://localhost:27017/testdb';
start();

async function start() {
    await mongoose.connect(connectionString, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });

    console.log('Database connected');

    // const person = new Person({
    //     firstName: 'John',
    //     lastName: 'Smith',
    //     age: 34,
    //     nationality: 'Bulgarian'       
    // });
    // await person.save();

    // const data = await Person.find({});
    // console.log(data[0].sayHi());
    // console.log(data[0].name);

    // data[0].name = 'Peter Jonhson';
    // await data[0].save();

    //const person = await Person.find({firstName: 'John'});
    //const person = await Person.findOne({firstName: 'John'});
    //const person = await Person.findOne({id: '637085dad545e306c03dd8b4'});
    //const person = await Person.findOne({_id: mongoose.Types.ObjectId('637085dad545e306c03dd8b4')});
    // const person = await Person.findById('637085dad545e306c03dd8b4');
    // console.log(person);

    // person.age = 40;
    // await person.save();

    //await Person.findByIdAndUpdate('637085dad545e306c03dd8b4', {$set: {age: 41}});

    // await Person.create({
    //     firstName: 'Tom',
    //     lastName: 'Harold',
    //     age: 27
    // });

    //const result = await Person.find({age: {$gte: 20, $lte: 30}});
    // const result = await Person
    //     .find({})
    //     .where({age: {$gte: 17}})
    //     .and({age: {$lte: 30}});

    // const result = await Person
    //     .find({})
    //     .where('age').gte(17).lte(30)
    //     .select('firstName lastName');

    // const result = await Person
    //     .find({})
    //     .where('age').gte(17).lte(30)
    //     .sort({age: 1});

    const result = await Person
        .find({})
        .where('age').gte(17).lte(30)
        .sort({age: -1})
        .skip(10)
        .limit(10);

    console.log(result);



    await mongoose.disconnect();
}