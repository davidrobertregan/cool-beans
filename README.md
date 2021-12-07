# Cool Beans! 

Application that allows coffee connoisseurs to discover new coffees  follow and comment on their favorite coffees and roasters. 

## Watch the demo in two minutes: 
https://www.loom.com/share/814ac5d67fbd489e90d40c85f292e85f

- Check out the app on [Netlify](https://cool-beans-regan-christensen.netlify.app/)
- [Back-end Repo](https://github.com/davidrobertregan/cool-beans-backend)

## How I worked on this project
- Started establishing the back-end domain relationships as my first project with a back-end using Sinatra
- Added pertinent information to [project pitch](https://docs.google.com/document/d/1iu5xDfxczfwPQamXttQDvGUoZ0z9JAS_eDrsfvkB5JE/edit?usp=sharing)
- Paired programming with Nick, project partner, througout to debug and problem solve

## How to navigate this project
- use [React Router](my-app-frontend/src/CoffeeContainer.js) with [NavBar links](my-app-frontend/src/Header.js) for easy user navigation between components
- utilized the useParams hook to display [roaster details](my-app-frontend/src/RoasterDetails.js) or [coffee details](my-app-frontend/src/CoffeeDetails)
- Initialized a fetch request to a backend route that displays the average rating of a coffee

## Why I built this project this way:
- Changed [back-end repo](https://github.com/davidrobertregan/cool-beans-backend) database from SQLite to Postgres to support deployment to Heroku

## What I would change if I had more time: 
- Implement user authentication so users could add/edit their own reviews
- Add a feature where users could collect their favorite coffees
- Make the app open source where users could add new roasters and coffees
