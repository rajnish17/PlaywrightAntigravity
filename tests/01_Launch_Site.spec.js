const {test} = require ('@playwright/test');

test('launch site', async ({page}) =>
    {
        await page.goto("https://google.com");
        console.log(await page.title());
    });