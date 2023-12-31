module.exports = {
	apps: [
	  {
		name: 'front-only-ua',
		script: './node_modules/nuxt/bin/nuxt.js',
		args: 'start',
		env: {
		  PORT: 8000
		}
	  }
	]
  }
  
  