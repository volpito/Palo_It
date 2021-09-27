*** For Starters ***

Hello and welcome to my App. This is a test project, carried out by myself, Maxime RIGOT, in order to try and get PaloIt a glimse of what i'm capable of doing. If you are reading this, it means that you are either Hammed, someone from the PALO staff, or just curious about my work, which would probably make sense a few years from now.

In any case, I humbly welcome you to this app.

*** ABOUT THE APP ***

This is a react-rails app, including both languages in a single project-file. To run the app, please enter these commands in your terminal :

bundle install yarn install (and also maybe) npm install

I would then advise you to make sure that the databases are up and running with the following :

rails db:migrate:status

If not, the following might be of use :

rails db:migrate rails db:seed

Once everything has been set-up, you will need to split your terminal screen in order to run both of the following commands simultaneously :

./bin/webpack-dev-server rails s

The server will, by default, run at this adress :

http://localhost:3000/

Here you will find a simple but honnest app including api-like data, a working CRUD, and also a text input and a searchbar both powered by React.

You can also take a look a the raw .jsons of the app at :

http://localhost:3000/products

http://localhost:3000/products/city/1 (the city_id list goes from 1 for Lyon to 5 for Paris and shows the related products)

If none of this shows, try repeating the previous steps, or maybe try a :

**rails db:migrate VERSION=0 **

which will set the database back to zero, and then start it again with :

rails db:migrate

rails db:seed

*** Testing ***

I have been asked to set up some test, which I did using Jasmine and testing-library/react for the front, and then rspec-rails for the API. I have included a several number of test, that run as such :

yarn test_hello (the first-draft of the tests, a test-test if you will, that only runs for a basic greeting program)

This first test checks if the function renders, and if the "prop" actually shows the text thas it contains, comparing it directly with a hard-coded string of my choosing.

yarn test (the main front/React.js test)

In this second test, I start with cheking if the 'city' prop, typed in the app's input, actually renders. I then went and checked if the redirection was effective on the "AddButton" function, which suposedly sends the user to the update form.

rails spec

This last test was made using scaffold, and runs fully green thanks to a few tricks (such as hard-coding the City_id as 1, and "before do" creating a city using FactoryBot, allowing the test-instance to create a new Product). It tests every single action made available by the rails g scaffold command. You may also find an unused file at '/spec/requests/products_rspec_first_draft' that shows how I tried the same thing by hand, then realising that the scaffold command also could be used for testing. It doesn't run for some reason, and I think that I was pretty close to finding out why when I found out about scaffold. I'll be happy to come back to it and try tu untie this knot, but i still have a last exercice to look into at the moment.

*** Issues ***

As you'll notice, the app can be improved. Here is a list of what I stumbled upon.

1_ you can set a tag for as many cities as you want, but the search button will only filter the list below for the last one you set as a tag and searched for.

2_ there is a bunch of errors (regarding map) that run in the console...

3_ I hoped you wouldn't notice it but the city tags enventually go OVER the search button... as long as you don't hover on it with you mouse. Nothing major, I'll set it inside rows or something if I ever get to the end of this test.

Hope you'll like it !

MRIGOT
