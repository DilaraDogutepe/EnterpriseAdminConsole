import { expect, Locator, Page } from "@playwright/test"
import { AbstractPage } from "../page-objects/AbstractPage"

export class LoginPage extends AbstractPage {
  //Define Selectors

  readonly page: Page
  readonly usernameInput: Locator
  readonly passwordInput: Locator
  readonly submitButton: Locator
  readonly errorUserNameMessage: Locator
  readonly errorPasswordMessage: Locator

  //Init selectors using constructor

  constructor(page: Page) {
    //this.page = page
    super(page)
    this.usernameInput = page.locator("#username")
    this.passwordInput = page.locator("#password")
    this.submitButton = page.locator("text=Log in")
    this.errorUserNameMessage = page.locator(".usernameErrorDiv")
    this.errorPasswordMessage = page.locator(".passwordErrorDiv")
  }

  //Define login page methods

  async login(username: string, password: string) {
    await this.usernameInput.type(username)
    await this.passwordInput.type(password)
    await this.submitButton.click()
  }

  async assertErrorMessage() {
    await expect(this.errorUserNameMessage).toBeVisible
    await expect(this.errorPasswordMessage).toBeVisible
  }
}
