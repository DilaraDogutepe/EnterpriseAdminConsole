import { Locator, Page } from "@playwright/test"

export class HomePage {
  readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  async visit() {
    await this.page.goto("https://eeproduct2.jotform.com")
  }
}
