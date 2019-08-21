# Install to Visual Studio Code
 1. Install the [stylelint](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint) Visual Studio Code Extension
 2. Add to the root folder of the project the `.stylelintrc` and the `.stylelintignore`

# Install to any project
 1. Add to the root folder of the project the `.stylelintrc` and the `.stylelintignore`
 2. Run the the root folder of the project: `npm install stylelint --save-dev`
 3. Create a new npm script in the package json: `"lint:styles": "stylelint \"src/assets/scss/**/*.scss\" > stylelint.log"`
 4. Execute `npm run lint:styles` whenever you want to lint your scss, or add the script to prestart and prebuild like this:  
    + `"prestart": "npm run lint:styles"`
    + `"prebuild": "npm run lint:styles"`
 5. Add to `.gitignore` the `stylelint.log`
