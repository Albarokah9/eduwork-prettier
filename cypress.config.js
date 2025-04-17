// const { defineConfig } = require('cypress')

// module.exports = defineConfig({
// 	e2e: {
// 		// baseUrl: 'http://zero.webappsecurity.com',
// 		setupNodeEvents(on, config) {
// 			// implement node event listeners here
// 		},
// 		specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}', // Pastikan pola ini mencakup file Anda
// 	},
// })
const { defineConfig } = require('cypress');

module.exports = defineConfig({
	e2e: {
		baseUrl: 'https://reqres.in',
		env: {
			userEmail: "eve.holt@reqres.in",
			userPassword: "cityslicka",
			apiUrl: 'https://reqres.in/api/login'
		},
		setupNodeEvents(on, config) {
			// Implementasi event di sini
		},
		specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}' // Pastikan pola ini mencakup file tes kamu
	}
});