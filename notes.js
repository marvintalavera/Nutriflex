//backend nodemon
//frontend npm start?


//day 1 (9-9-23)


//first commit

//currently added backend and frontend folder

//the backend is currently on port 4000 and the backend is on port 3000

//will change that soon but going to commit because it works as of now



//second commit

//added the middleware and now the express app is setup with the barebones



//third commit

//created routes for workouts and meals that are functioning in postman



//day 2 (9-11-23)


//fourth commit

//created controllers for meals and workouts, they all function with postman
//and changed routes to go through controllers

//connected to database and it sends and operates fully with CRUD

//backend finished


//day 4 (9-16-23)


//fifth commit

//added css and made the workout cards

//added css and made meal cards

//connected cards to data

//crud works from postman



//sixth commit 

//added workout and meal forms, they submit and add but don't auto refresh site



//seventh commit

//safety save, figuring out how to make dispatch global variable with both useEffect functions



//eighth commit

//able to delete data and auto refreshes on site



//ninth commit

//error pops up if fields are missing, looks nicer

//fixed dispatch into dependency array



//tenth commit

//app done but need to make it have authentication and clean up css

//updated the time to look normal


//day 5 (9-18-23)

//eleventh commit

//created user controller, schema, and routes for them to sign up and login, works with postman

//hovering over delete turns red



//twelveth commit

//user is allowed to sign up and adds to collection on postman and hashes the password with bcrypt



//thirteenth commit

//checks if password and email are valid



//fourteenth commit

//password is hashed and made into a token, the actual password is not uploaded to mongo



//fifthteenth commit

//able to login from postman and checks if password and email are correct with one in database



//sixteenth commit

//created and styled login and sign up page and sends it back to console



//17th

//created useSignUp hook and works



//18th

//created logout hook and allows you to login and logout and shows the user logged in and if they are the login and sign up buttons disappear



//19th

//safety save, doesn't allow to submit meals, state.meals not iterable