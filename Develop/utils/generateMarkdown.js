
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
    ## ${data.title}  
    
    ## Description
    #### ${data.description}
    
    ## Table of Contents
    #### ${data.confirmTable}
    
    ## Installation 
    #### ${data.installation}
    
    ## Usage
    #### ${data.usage} 
    
    ## Contribution 
    #### ${data.contributing}
    
    ## Tests
    #### ${data.test}
    
    ## License 
    ####${renderLicenseSection(data.license)} 
    ####${renderLicenseLink(data.licenseLink)} 
    
    ## Questions
    #### ${data.github}
    #### ${data.githubLink}
    #### ${data.email}

     
`;   /// move renderLicenseLinks up ??? 

}

module.exports = generateMarkdown;