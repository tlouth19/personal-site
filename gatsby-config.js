module.exports = {
  siteMetadata: {
    title: 'Tyson Louth',
    siteUrl: 'https://www.tysonlouth.com',
    description: `The personal website of Tyson Louth.`
  },
  plugins: [
  	'gatsby-plugin-react-helmet', 
  	'gatsby-plugin-sass',
  	'gatsby-plugin-sitemap',
  	{
	    resolve: `gatsby-plugin-manifest`,
	    options: {
	      name: "Tyson Louth",
	      short_name: "TL",
	      start_url: "/",
	      background_color: "#000000",
	      theme_color: "#ffffff",
	      display: "minimal-ui",
	      icon: "src/favicon.png"
	    },
	  },
	  'gatsby-plugin-offline',
  	{
	    resolve: `gatsby-plugin-favicon`,
	    options: {
	      logo: "./src/favicon.png",
	      injectHTML: true,
	      icons: {
	        android: true,
	        appleIcon: true,
	        appleStartup: true,
	        coast: false,
	        favicons: true,
	        firefox: true,
	        twitter: false,
	        yandex: false,
	        windows: false
	      }
	    }
	  }
  ],
}
