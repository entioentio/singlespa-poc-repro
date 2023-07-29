# Setup
### Installing deps

`yarn setup`

### Starting container...

`yarn start_container`

### ...and serving children apps:

`yarn start_navbar`

`yarn start_app_one`

`yarn start_app_two`


All ports are hardcoded - container: 9000, apps: 8031-8033

# Reproduction
If you open the container the navigation is visible. 
Clicking on _AppOne_ or _AppOne/RouteOne_ navigates correctly to App one and the right route.

However, when you click _AppTwo(_ it always tries to resolve it's route from inside of the _AppOne_ e.g. the URL becomes `http://localhost:9000/app-one/app-two` instead of `http://localhost:9000/app-two`).

I ve tried number of things inclouding follwoing the stack trace by the navigation. I found that that same calls are being done twice, but cannot find a cause. I think that the configuration is incorrect but haven't been able to solve it for 6 hours.



