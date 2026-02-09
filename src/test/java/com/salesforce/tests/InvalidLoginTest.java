package com.salesforce.tests;

import com.salesforce.base.BaseTest;
import com.salesforce.pages.LoginPage;
import org.testng.Assert;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class InvalidLoginTest extends BaseTest {

    private LoginPage loginPage;

    @BeforeMethod
    public void initPage() {
        loginPage = new LoginPage(driver);
    }

    @Test(priority = 1)
    public void verifyLoginWithEmptyCredentials() {
        loginPage.doLogin("", "");
        Assert.assertTrue(loginPage.isErrorMessageDisplayed());
    }

    @Test(priority = 2)
    public void verifyLoginWithEmptyUsername() {
        loginPage.doLogin("", "InvalidPassword123");
        Assert.assertTrue(loginPage.isErrorMessageDisplayed());
    }

    @Test(priority = 3)
    public void verifyLoginWithEmptyPassword() {
        loginPage.doLogin("invaliduser@salesforce.com", "");
        Assert.assertTrue(loginPage.isErrorMessageDisplayed());
    }

    @Test(priority = 4)
    public void verifyLoginWithInvalidUsername() {
        loginPage.doLogin("invaliduser@invalid.com", "ValidPassword123");
        Assert.assertTrue(loginPage.isErrorMessageDisplayed());
    }

    @Test(priority = 5)
    public void verifyLoginWithInvalidPassword() {
        loginPage.doLogin("testuser@salesforce.com", "WrongPassword");
        Assert.assertTrue(loginPage.isErrorMessageDisplayed());
    }

    @Test(priority = 6)
    public void verifyLoginWithInvalidCredentials() {
        loginPage.doLogin("invaliduser@invalid.com", "InvalidPassword");
        Assert.assertTrue(loginPage.isErrorMessageDisplayed());
    }

    @Test(priority = 7)
    public void verifyLoginWithSpecialCharactersInUsername() {
        loginPage.doLogin("!@#$%^&*()", "TestPassword123");
        Assert.assertTrue(loginPage.isErrorMessageDisplayed());
    }

    @Test(priority = 8)
    public void verifyLoginWithSqlInjectionAttempt() {
        loginPage.doLogin("' OR '1'='1", "' OR '1'='1");
        Assert.assertTrue(loginPage.isErrorMessageDisplayed());
    }

    @Test(priority = 9)
    public void verifyErrorMessageContent() {
        loginPage.doLogin("invaliduser@invalid.com", "InvalidPassword");
        String errorMessage = loginPage.getErrorMessage();
        Assert.assertNotNull(errorMessage);
        Assert.assertFalse(errorMessage.isEmpty());
    }

    @Test(priority = 10)
    public void verifyUserRemainsOnLoginPageAfterInvalidLogin() {
        loginPage.doLogin("invaliduser@invalid.com", "InvalidPassword");
        String currentUrl = loginPage.getCurrentUrl();
        Assert.assertTrue(currentUrl.contains("salesforce.com"));
    }
}
