import { registerApplication, start, LifeCycles, getMountedApps } from "single-spa";
import {
	constructApplications,
	constructRoutes,
	constructLayoutEngine,
  } from 'single-spa-layout';

// const routes = constructRoutes(document.querySelector('#single-spa-layout'));
const routes = constructRoutes({
	"routes": [
		{
			"type": "application",
			"name": "@MW/navbar"
		},
		{
			"type": "route", "path": "/app-one", "routes":
			[
				{
					"type": "application",
					"name": "@MW/app-one"
				},
			]
		},
		{
			"type": "route", "path": "/app-two", "routes":
			[
				{
					"type": "application",
					"name": "@MW/app-two"
				},
			]
		}
	]
  });


const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});

const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
start({
	urlRerouteOnly: true,
});

// @ts-ignore
window.getMountedAppNames = () => console.log(getMountedApps());

// registerApplication({
//   name: "@MW/navbar",
//   app: () => System.import<LifeCycles>("@MW/navbar"),
//   activeWhen: ["/"]
// });

// start({
//   urlRerouteOnly: true,
// });
