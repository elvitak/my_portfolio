describe("User can navigate the app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  describe("to About tab and it", () => {
    beforeEach(() => {
      cy.get("#about-tab").click();
    });
    it("is expected to see About Me header", () => {
      cy.get("#about-header").should("contain", "About Me");
    });
    it("is expected to see component name in url", () => {
      cy.url().should("contain", "about");
    });
    it("is expected to not dispaly Projects", () => {
      cy.get("#projects-header").should("not.exist");
    });
    it("is expected to not  dispaly CV", () => {
      cy.get("#cv").should("not.exist");
    });
  });

  describe("to My projects tab and it", () => {
    beforeEach(() => {
      cy.get("#projects-tab").click();
    });
    it("is expected to display My Projects header", () => {
      cy.get("#projects-header").should("contain", "My Projects");
    });
    it("is expected to display component name in url", () => {
      cy.url().should("contain", "projects");
    });
    it("is expected to not display About Me header", () => {
      cy.get("#about-header").should("not.exist");
    });
    it("is expected to not dispaly CV", () => {
      cy.get("#cv").should("not.exist");
    });
  });

  describe("to CV tab and it", () => {
    beforeEach(() => {
      cy.get("#about-tab").click();
      cy.get("#projects-tab").click();
      cy.get("#cv-tab").click();
    });
    it("is expected to display CV", () => {
      cy.get("#cv").should("contain", "Curriculum Vitae");
    });
    it("is expected to display correct url", () => {
      cy.url().should("not.contain", "projects").and("not.contain", "about");
    });
    it("is expected to not display About me header", () => {
      cy.get("#about-header").should("not.exist");
    });
    it("is expected to not display My Projects header", () => {
      cy.get("#projects-header").should("not.exist");
    });
  });
});
