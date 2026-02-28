// In CI/CD pipelines, tests run against different environments. 
// Write a JavaScript program using a switch statement that takes an environment name stored in a variable 
// and prints the base URL, API key pattern, and timeout. Use const for fixed values and let for the assembled config.
// Environments: dev, staging, qa, production/prod. Each has different base URL, API key prefix, timeout, and description.


let envName = "dev";

switch(envName)
{

    case "dev":

        console.log("Environment: DEV Base URL: https://deving-api.testingacademy.com API Key: dev_key_xxxx-xxxx Timeout: 400ms Description: dev - Pre-production mirror1")
        break;

    case "staging":
        console.log ("Environment: STAGING Base URL: https://staging-api.testingacademy.com API Key: std_key_xxxx-xxxx Timeout: 600ms Description: Staging - Pre-production mirror2")
        break;

    case "qa":
        console.log("Environment: QA Base URL: https://qa-api.testingacademy.com API Key: qa_key_xxxx-xxxx Timeout: 500ms Description: qa - Pre-production mirror3")
        break;

    case "production/prod":
        console.log("Environment: PRODUCTION/PROD Base URL: https://prod-api.testingacademy.com API Key: prd_key_xxxx-xxxx Timeout: 800ms Description: production/prod - Pre-production mirror4")
        break;

    default :
        console.log("Wrong nev name");
}
