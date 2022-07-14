import BasePage from '../pageObjects/basePage'

class MainPage extends BasePage {
  static get url () {
    return 'https://demoqa.com/automation-practice-form';
  }

  static get fillFirstName() {
    return cy.get("#firstName");
  }

  static get fillLastName() {
    return cy.get("#lastName");
  }

  static get fillEmail() {
    return cy.get("#userEmail");
  }

  static get fillGender() {
    return cy.get("[for*='gender-radio-1']");
  }

  static get fillPhone() {
    return cy.get("#userNumber");
  }

  static get pickBirthDate() {
    return cy.get("#dateOfBirthInput");
  }

  static setYear() {
      return cy.get("[class*='react-datepicker__year-select']");
  }

  static setDay() {
    return cy.get("[class*='react-datepicker__day']");
  }

  static setMonth() {
    return cy.get("[class*='react-datepicker__month-select']");
  }

  static get pickSubject() {
    return cy.get("#subjectsWrapper");
  }

  static get pickHobby() {
    return cy.get("#hobbiesWrapper");
  }

  static get pickAddress() {
    return cy.get("#currentAddress");
  }

  static get pickState() {
    return cy.get("#state");
  }

  static get pickCity() {
    return cy.get("#city");
  }

  static get submitInfo() {
    return cy.get("#submit");
  }

  static get checkInfo() {
    return cy.get(".table-responsive");
  }
}

export default MainPage;