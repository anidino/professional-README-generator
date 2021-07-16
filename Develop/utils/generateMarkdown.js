
const fs = require("fs");
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }                         //starter code

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {                              //starter code
    if (userAnswers.licenseLink) {
        return `${licenseLink}`
    } else {
        return '';
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {                            //starter code
    if (userAnswers.license) {
        return `${license}`
    } else {
        return "";
    }
}
// TODO: Create a function to generate markdown for README     //starter code below
function generateMarkdown(data) {
    return `#Project Title
    # ${data.title} # 
    
    ## Description
    ## ${userAnswers.description}
    ## Table of Contents
    ## ${userAnswers.confirmTable}
    ## Installation 
    ## ${userAnswers.installation}
    ## Usage
    ## ${userAnswers.usage} 
    ## Contribution 
    ## ${userAnswers.contributing}
    ## Tests
    ## ${userAnswers.test}
    ## License 
    ## ${userAnswers.license}
    ## Questions
    ### ${userAnswers.github}
    ### ${userAnswers.githubLink}
    ### ${userAnswers.email}
`;
}

module.exports = generateMarkdown;