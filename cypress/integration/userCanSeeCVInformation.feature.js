describe("User can see list of education", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("#cv-tab").click();
  });
  it("is expected to see first educational institution", () => {
    cy.get("#edu-1").within(() => {
      cy.get(".institution").should("conatin", "Riga Technical University");
      cy.get(".programm").should(
        "contain",
        "Bachelor's degree, Transport System Engineering"
      );
      cy.get(".period").should("contain", "2011-2015");
      cy.get(".description").should("contain", "Logistics, Mechanics");
    });
  });

  it("is expected to see second educational institution", () => {
    cy.get("#edu-2").within(() => {
      cy.get(".institution").should("conatin", "Uppsala University");
      cy.get(".programm").should(
        "contain",
        "Master's degree, Industrial Management and Innovation"
      );
      cy.get(".period").should("contain", "2016-2018");
      cy.get(".description").should("contain", "Innovation Management");
    });
  });

  it("is expected to see third educational institution", () => {
    cy.get("#edu-3").within(() => {
      cy.get(".institution").should("conatin", "Craft Academy");
      cy.get(".programm").should(
        "contain",
        "sertificate of excellence , Junior developer"
      );
      cy.get(".period").should("contain", "2021");
      cy.get(".description").should("contain", "Bootcamp");
    });
  });
});
