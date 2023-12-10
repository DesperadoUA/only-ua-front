module.exports = {
	apps: [
	  {
		name: 'front-casquad',
		script: './node_modules/nuxt/bin/nuxt.js',
		args: 'start',
		env: {
		  PORT: 7001
		}
	  }
	]
  }
  
  