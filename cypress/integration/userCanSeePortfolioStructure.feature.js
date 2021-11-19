describe("Portfolio interface", () => {
  it("is expected to successfully render", () => {
    cy.visit("http://localhost:3000");
    cy.get("#about-tab").should("contain", "About Me");
    cy.get("#cv-tab").should("contain", "CV");
    cy.get("#projects-tab").should("contain", "My Portfolio");
    cy.get("#footer").should("contain", "Made with React 17.0.2");
  });
});
