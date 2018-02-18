# Welcome to Temperament!
To run Temperament, just clone this repository, run `npm install`, and then run `npm start`.
## Inspiration
After looking through TreeHacks' various verticals, we found the Energy vertical to be the most exciting and attractive. We wanted to work on a web app project, particularly focusing on visualizing one's impact on the environment. We hope to make people more metacognitive about their carbon footprint.
## What it does
Temperament is a web app that uses your location, temperature setting, and square footage to estimate your electrical bill. We also graph your local area's external temperature and energy needs.
## How we built it
We used React for the front-end and Node.js for the back-end. We split into teams to develop the API and the web app. We first sourced the data from various governmental and weather organizations. We then developed our own physics algorithm for estimating the energy (in kilowatt hours per month) required to maintain the preselected temperature as well the cost per month to main the preselected temperature. On the front end side, the user is able to select the desired room temperature, building area, and the location, which then queries the Node.js API.
## Challenges we ran into
We struggled with finding ways to validate our algorithm. Although we were able to source data for our algorithm, we had trouble finding data to validate the accuracy of our algorithm. On the front end side, we struggled working with AngularJS, so decided on Saturday to scrap our AngularJS app in favor of a React one.
## Accomplishments that we're proud of
We are proud to have a finished, functional product with both a back-end API in addition to a React web app. The app is pretty self-sufficient, and we have successfully deployed the API on Heroku!
## What we learned
We have learned about both the availability and challenges associated with scouring the web for data. We also worked on both front-end and back-end development on a tight schedule. Although Node.js was familiar, React was new territory for all of us, and we are glad we learned the technology.

## What's next for Temperament
We will work on learning how to train datasets as well as validating our data!
