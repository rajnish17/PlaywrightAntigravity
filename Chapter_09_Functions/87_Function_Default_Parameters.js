function retry(testName, maxRetries = 3, delay = 1000)
{
    console.log(`Retrying ${testName} upto ${maxRetries} times, ${delay} ms apart`)
}

retry("Login");
retry("Checkout", 5);
retry("API test", 2, 500);
