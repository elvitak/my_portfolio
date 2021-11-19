describe("User can see list of work experience", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("#cv-tab").click();
  });
  it("is expected to see first work experience", () => {
    cy.get("#work-1").within(() => {
      cy.get(".item").should("contain", "Kuehne-Nagel");
      cy.get(".header").should("contain", "Airwreight forwarder");
      cy.get(".description").should("contain", "2014-2015");
    });
  });

  it("is expected to see second work experience", () => {
    cy.get("#work-2").within(() => {
      cy.get(".item").should("contain", "Bank Citadele");
      cy.get(".header").should("contain", "Internship - Product Owner");
      cy.get(".description").should("contain", "2019");
    });
  });
});
