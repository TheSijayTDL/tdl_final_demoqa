import MainPage from '../pageObjects/mainPage'
import SortablePage from '../pageObjects/sortablePage';

describe('(Part 2) DemoQA Forms', () => {
  beforeEach(() => {
    MainPage.visit();
  });

  it("Forms - Practice forms", () => {
    MainPage.fillFirstName.type("Ruslans");
    MainPage.fillLastName.type("Golubevs");
    MainPage.fillEmail.type("random_email@gmail.com");
    MainPage.fillGender.click();
    MainPage.fillPhone.type("1234567890");
    MainPage.pickBirthDate.click();
    MainPage.setYear().select("1984");
    MainPage.setMonth().select("February");
    MainPage.setDay()
    .not("[class*='react-datepicker__day--outside-month']")
    .contains("29").click();
    MainPage.pickSubject.type("Maths{enter}");
    MainPage.pickHobby
      .contains("Sports")
      .click();
    MainPage.pickAddress.type("Pils Street 45");
    MainPage.pickState.type("NCR{enter}");
    MainPage.pickCity.type("Delhi{enter}");
    MainPage.submitInfo.click();
    MainPage.checkInfo.should("contain.text", "Student NameRuslans Golubevs");
    MainPage.checkInfo.should("contain.text", "Student Emailrandom_email@gmail.com");
    MainPage.checkInfo.should("contain.text", "GenderMale");
    MainPage.checkInfo.should("contain.text", "Mobile1234567890");
    MainPage.checkInfo.should("contain.text", "Date of Birth29 February,1984");
    MainPage.checkInfo.should("contain.text", "SubjectsMaths");
    MainPage.checkInfo.should("contain.text", "HobbiesSports");
    MainPage.checkInfo.should("contain.text", "AddressPils Street 45");
    MainPage.checkInfo.should("contain.text", "State and CityNCR Delhi");
  });
}); 

describe('(Part 2) DemoQA Sortable Forms', () => {
  beforeEach(() => {
    SortablePage.visit();
  });

    it("Interactions - Sortable", () => {
      SortablePage.valuesList
        .should("have.text", "OneTwoThreeFourFiveSix");
      SortablePage.valuesList.contains("One").trigger("mousedown")
      SortablePage.valuesList.contains("Six").click().trigger("mouseleave");
      SortablePage.valuesList.contains("Two").trigger("mousedown");
      SortablePage.valuesList.contains("Six").click().trigger("mouseleave");
      SortablePage.valuesList.contains("Three").trigger("mousedown");
      SortablePage.valuesList.contains("Six").click().trigger("mouseleave");
      SortablePage.valuesList.contains("Four").trigger("mousedown");
      SortablePage.valuesList.contains("Six").click().trigger("mouseleave");
      SortablePage.valuesList.contains("Five").trigger("mousedown");
      SortablePage.valuesList.contains("Six").click().trigger("mouseleave");
      SortablePage.valuesList
        .should("have.text", "SixFiveFourThreeTwoOne");
    });
});