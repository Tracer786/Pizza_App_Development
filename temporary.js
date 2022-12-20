// firstly we will create the express server
// for that we will first have to import the express module
const express = require('express')
const app = express()
//here app and express are random variables
// app is variable
// express is the function used

const PORT = process.env.PORT || 3000

//process.env is outside the app

// it will firstly check the process.env
// if it has the variable PORT it will run on that port
// otherwise it will run on port 3000

//we can specify the above line in form of if else

// const PORT;
// if (process.env.PORT) {
//     PORT = process.env.PORT
// } else {
//     PORT = 3000
// }


//  / is the request for the domain name i.e localhost:3000
app.get('/',(req, res)=> {
    res.send('Hello From Server')
},


app.listen(3000, () => {

    // console.log('Listening on port 3000')

    // it will always print the same line
    //to hardcore it we can use 

    console.log(`Listening on port ${PORT}`)
})

// now we can run the above file as node server.js


//also we have to restart the server evertime
// to handle the issue we have added the scripts menu in the package.json file
// for development we will use the "dev" script
// for deploying on live server we will use the "serve" script


//now to run this scripts present in the package.json file we simply need to type "npm run dev" or "yarn dev"

//now whenever we make any changes the server will restart automatically)