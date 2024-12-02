
const withMT = require("@material-tailwind/react/utils/withMT");

 
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        imaged:"url('./public/assets/images/image.jpg')",
        
        "login-bg":"url('https://apps.keralatourism.org/images/hri/large/tea_estate_idukki_934.jpg')",
        "register-bg":"url('https://apps.keralatourism.org/images/hri/large/the_hidden_beauty_of_lakkam_waterfalls_munnar_850.jpg')"
      }
    },
  },
  plugins: [],
});