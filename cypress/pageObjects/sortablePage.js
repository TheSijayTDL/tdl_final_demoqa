import BasePage from '../pageObjects/basePage'

class SortablePage extends BasePage {
  static get url () {
    return 'https://demoqa.com/sortable';
  }

  static get valuesList() {
    return cy.get("#demo-tabpane-list");
  }

  static get pickValue() {
    return cy.get(".list-group-item list-group-item-action");
  }
}

export default SortablePage;