
const fs = require("fs");
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }                         //starter code

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenseLink) {                              //starter code
    if (licenseLink) {
        return `${licenseLink}`
    } else {
        return '';
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {                            //starter code
    if (license) {
        return `${license}`
    } else {
        return "";
    }
}
// TODO: Create a function to generate markdown for README     //starter code below
function generateMarkdown(data) {
    return `
    #Project Title
    ## ${data.name}  
    
    
    ## Table of Contents
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [contributing](#contributing)
    - [Tests](#test)
    - [License](#license)
    - [Questions](#questions)
    
    
    ## Description
    #### ${data.description}
    
 
    ## Installation 
    #### ${data.installation}
    
    ## Usage
    #### ${data.usage} 
    
    ## Contribution 
    #### ${data.contributing}
    
    ## Tests
    #### ${data.test}
    
    ## License 
    #### ${renderLicenseSection(data.license)} 
    #### ${renderLicenseLink(data.licenseLink)} 
    
    ## Questions
    #### If you have additional questions or would like to get in touch with me, reach out using a method below
    #### Github UserName - @${data.github}
    #### [Github Profile](${data.githubLink})
    #### [Email](${data.email})

     
`;

}

module.exports = generateMarkdown;