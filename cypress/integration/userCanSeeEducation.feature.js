describe("User can see list of education", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("#cv-tab").click();
  });
  it("is expected to see first educational institution", () => {
    cy.get("#edu-1").within(() => {
      cy.get(".item").should("contain", "Riga Technical University");
      cy.get(".header").should(
        "contain",
        "Bachelor's degree, Transport System Engineering"
      );
      cy.get(".description").should("contain", "2011-2015");
    });
  });

  it("is expected to see second educational institution", () => {
    cy.get("#edu-2").within(() => {
      cy.get(".item").should("contain", "Uppsala University");
      cy.get(".header").should(
        "contain",
        "Master's degree, Industrial Management and Innovation"
      );
      cy.get(".description").should("contain", "2016-2018");
    });
  });

  it("is expected to see third educational institution", () => {
    cy.get("#edu-3").within(() => {
      cy.get(".item").should("contain", "Craft Academy");
      cy.get(".header").should(
        "contain",
        "Certificate of excellence , Junior developer"
      );
      cy.get(".description").should("contain", "2021");
    });
  });
});
