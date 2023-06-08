import { Locator, Page } from "@playwright/test"

export class Navbar {
  readonly page: Page
  readonly dashboardTab: Locator
  readonly usersTab: Locator
  readonly formsTab: Locator
  readonly teamsTab: Locator
  readonly settingsTab: Locator

  constructor(page: Page) {
    this.page = page
    this.dashboardTab = page.locator(".dashboardIcon")
    this.usersTab = page.locator(".userManagementIcon")
    this.formsTab = page.locator(".formManagementIcon")
    this.teamsTab = page.locator("aria-label='Teams Tab'")
    this.settingsTab = page.locator("aria-label='Settings Tab'")
  }

  async clickOnTab(tabName) {
    switch (tabName) {
      case "Dashboard":
        await this.dashboardTab.click()
        break

      case "Users":
        await this.usersTab.click()
        break

      case "Forms":
        await this.formsTab.click()
        break

      case "Teams":
        await this.teamsTab.click()
        break

      case "Settings":
        await this.settingsTab.click()
        break

      default:
        throw new Error("This tab does not exist!")
    }
  }
}
