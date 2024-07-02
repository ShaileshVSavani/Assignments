describe("Todo List Application", () => {
  let totalMarks = 0;
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  // Test cases for adding tasks

  it("displays message when no tasks are present  - marks 1", () => {
    cy.get(".todo-list").should("contain", "No tasks found");
  });

  it("does not add task if input is empty - marks 1", () => {
    cy.get(".button").click();
    cy.get(".todo-list li").should("have.length", 0);
  });

  it("adds a new task  - marks 1", () => {
    cy.get(".input").type("New Task");
    cy.get(".button").click();
    cy.get(".todo-list li").should("contain", "New Task");
  });

  it("adds multiple tasks  - marks 3", () => {
    cy.get(".input").type("Task 1");
    cy.get(".button").click();
    cy.get(".input").type("Task 2");
    cy.get(".button").click();
    cy.get(".todo-list li").should("have.length", 2);
  });

  // Test cases for deleting tasks

  // Test cases for UI interactions
  it("displays delete button for each task  - marks 1", () => {
    cy.get(".input").type("Task 1");
    cy.get(".button").click();
    cy.get(".delete-button").should("be.visible");
  });

  // Test cases for edge cases
  it("adds task with special characters  - marks 1", () => {
    cy.get(".input").type("Task @#$%");
    cy.get(".button").click();
    cy.get(".todo-list li").should("contain", "Task @#$%");
  });

  // Test cases for error handling
  it("shows error message for empty input  - marks 1", () => {
    cy.get(".button").click();
    cy.contains(".error-message", "Please enter a task name").should(
      "be.visible"
    );
  });

  // Integration tests
  it("adds multiple tasks and verifies list length  - marks 1", () => {
    cy.get(".input").type("Task 1");
    cy.get(".button").click();
    cy.get(".input").type("Task 2");
    cy.get(".button").click();
    cy.get(".todo-list li").should("have.length", 2);
  });

  // End-to-end scenarios
  Cypress.on("test:after:run", (test, runnable) => {
    if (test.state === "passed") {
      const marks = parseFloat(runnable.title.match(/marks (\d+(\.\d+)?)/)[1]);
      totalMarks += marks;
    }
  });

  after(() => {
    cy.log(`Total Marks: ${totalMarks}`);
  });
});
