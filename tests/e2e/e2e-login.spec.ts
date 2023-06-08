import { test, expect } from "@playwright/test"
import { HomePage } from "../../page-objects/HomePage"
import { LoginPage } from "../../page-objects/LoginPage"

test.describe.parallel("Login / Logout Flow", () => {
  let loginPage: LoginPage
  let homePage: HomePage

  //Before Hook
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page)
    homePage = new HomePage(page)

    await homePage.visit()
  })

  //Negative Scenario
  test("Negative Scenario for Login", async ({ page }) => {
    await loginPage.login("invalid username", "invalid password")

    await loginPage.assertErrorMessage()
  })
  //Positive Scenario + Logout
  test("Positive Scenario", async ({ page }) => {
    await loginPage.login("burakkusoglu@jotform.com", "1")

    const accountSummaryTab = await page.locator("#jfHeaderAvatar")
    await expect(accountSummaryTab).toBeVisible

    await expect(page).toHaveURL("https://eeproduct2.jotform.com/myforms/")
  })
})
