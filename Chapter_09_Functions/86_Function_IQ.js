function runTest(name, status, duration)
{
    return `${name}: ${status} ${duration}ms`;
}

const result = (runTest("login", "Pass", 520));
console.log(result);