---
# Todo List Project Instructions

## **Total Marks: 10**

### Project Overview

You are tasked with building a Todo List application using React. The project should include the following features:
  - Two components: one for input and one for displaying tasks using props and mapping elements.
  - Ability to add tasks with a default status of incomplete (`isComplete: false`).
  - UI should include icons for task deletion.
  - Design should be user-friendly and responsive.
---

## Project Structure and Components

### Component Setup

1. Create two React components:
   - **InputComponent**: Accepts task input and adds it to the list.
   - **TaskListComponent**: Displays tasks, allowing deletion via icons.

### Task Object Structure

2. Define the task object structure as follows:
   ```js
   {
     task: String,
     isComplete: Boolean // Default: false
   }
   ```

### UI Design Requirements

3. Ensure the UI meets the following criteria:

#### InputComponent (`InputComponent.js`)

- **Class**: `.input`
  - **Tag**: `<input>`

1. Implement the following in `InputComponent.js`:
   - Input field (`taskName`) with class `.input` to collect task names.
   - Button with class `.button` to add tasks to the list.

#### TaskListComponent (`TaskListComponent.js`)

- **Class**: `.todo-list`
  - **Tag**: `<ul>` for the list, `<li>` for each task item.

2. Implement the following in `TaskListComponent.js`:

   - Receive tasks via props and map them for display using `.map()`.
   - Each task item (`<li>`) should include:
     - Task name display.
     - Delete icon (`<button>` or `<div>` with class `.delete-button`).

3. handle edge cases

- if there are no tasks then show in the ui "No tasks found"
- if input tag is blank and try to submit then show message to the ui
- make class="error-message", "Please enter a task name"

### UI Styling and Responsiveness

- Use CSS for styling components and ensuring responsiveness across different screen sizes.

---

## Implementing Components

### InputComponent

1. Create `InputComponent.js`:
   - Include an input field (`taskName`) with class `.input`.
   - Add button with class `.button` to add tasks to the list.

### TaskListComponent

2. Create `TaskListComponent.js`:
   - Accept tasks via props and map them for display within `<ul>` with class `.todo-list`.
   - Each task (`<li>`) should display task name and a delete icon (`<button>` or `<div>` with class `.delete-button`).

---

## Testing with Cypress

### Cypress Test Cases

1. Write Cypress test cases to validate functionality:
   - **Adding Tasks**:
     - Locate input field with class `.input` and add a task.
     - Click button with class `.button` and verify task appears in `.todo-list`.
   - **Deleting Tasks**:
     - Find delete icon with class `.delete-button` for each task item (`<li>`).
     - Click delete icon and ensure task is removed from `.todo-list`.
   - **UI Responsiveness**:
     - Test application responsiveness across different screen sizes using Cypress viewport commands.

### Testing Tips

- Use `.should()` assertions to verify task addition and deletion.
- Ensure proper tagging and class usage (`<input>`, `<button>`, `<ul>`, `<li>`, `.input`, `.button`, `.todo-list`, `.delete-button`) in your React components.

---

## Submission and Testing Your Score

1. Run 'npm i' to install dependencies. If you encounter any errors during installation, use: `./node_modules/.bin/cypress install`.
2. Run tests using either `npx cypress open` or `npx cypress run`.

**Best of Luck!**

---
