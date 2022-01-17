console.log("Operating OK!")

const mongoose = require('mongoose')
const User = require("./User")

mongoose.connect("mongodb://localhost/testdb", () => {
    console.log("MongoDb connected")
    },
    e => console.erroe(e))

// ABOVE IS SETUP 

run()
async function run() {
    try {

        const user1 = await User.findById('61e0f472053b6bc3298cba29')
        console.log(user1)
        const user2 = await User.where('name')
            .equals('Kyle')
            .gt(12)
            .populate('bestFriend')
            .limit(2)
            .select('age')
            //  user[0].bestfriend ='61e0bded1b5044a567fdfb52'
           // await user[a0].save()
        console.log(user2)
        
        
        /*
        const user = await User.create({
            name: 'Kyle', 
            age: 26,
            email: "TEST@test.com",
            hobbies: ['Weight Lifting', 'Bowling'], 
            address: {
                street: 'Main Street',
            },
        })
        console.log(user)*/

    } catch (e) {
        console.log(e.message)
    }

}



//  user.name = 'Kyle'
// const user = new User ({name: 'Kyle', age: 26 })






