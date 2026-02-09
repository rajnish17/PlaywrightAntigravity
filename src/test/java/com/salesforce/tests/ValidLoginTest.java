package com.salesforce.tests;

import com.salesforce.base.BaseTest;
import com.salesforce.pages.LoginPage;
import org.testng.Assert;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class ValidLoginTest extends BaseTest {

    private LoginPage loginPage;

    @BeforeMethod
    public void initPage() {
        loginPage = new LoginPage(driver);
    }

    @Test(priority = 1)
    public void verifyLoginPageIsDisplayed() {
        Assert.assertTrue(loginPage.isUsernameFieldDisplayed());
        Assert.assertTrue(loginPage.isPasswordFieldDisplayed());
        Assert.assertTrue(loginPage.isLoginButtonDisplayed());
    }

    @Test(priority = 2)
    public void verifyLoginPageTitle() {
        String expectedTitle = "Login | Salesforce";
        Assert.assertEquals(loginPage.getPageTitle(), expectedTitle);
    }

    @Test(priority = 3)
    public void verifyLoginPageUrl() {
        String currentUrl = loginPage.getCurrentUrl();
        Assert.assertTrue(currentUrl.contains("login.salesforce.com"));
    }

    @Test(priority = 4)
    public void verifyValidLoginWithCredentials() {
        String validUsername = "testuser@salesforce.com";
        String validPassword = "ValidPassword123";
        loginPage.doLogin(validUsername, validPassword);
        String currentUrl = loginPage.getCurrentUrl();
        Assert.assertFalse(currentUrl.contains("login.salesforce.com") && loginPage.isErrorMessageDisplayed());
    }

    @Test(priority = 5)
    public void verifyValidLoginWithRememberMe() {
        String validUsername = "testuser@salesforce.com";
        String validPassword = "ValidPassword123";
        loginPage.doLoginWithRememberMe(validUsername, validPassword);
        String currentUrl = loginPage.getCurrentUrl();
        Assert.assertFalse(currentUrl.contains("login.salesforce.com") && loginPage.isErrorMessageDisplayed());
    }
}
