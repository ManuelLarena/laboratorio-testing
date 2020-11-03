beforeEach(() => {
  const user = 'admin';
  const password = 'test';

  // Act
  cy.visit('/');
  cy.findByLabelText('Usuario *').as('userInput');
  cy.findByLabelText('Contraseña *').as('passwordInput');

  cy.get('@userInput').type(user);
  cy.get('@passwordInput').type(password);
  cy.findByRole('button', { name: 'Login' }).click();
});

describe('submodule-list spec', () => {
  it('visit submodule-list page', () => {
    // Act
    cy.visit('/submodule-list');
  });

  it('should show the option list when visit /submodule-list url', () => {
    // Arrage
    // Act
    cy.visit('/submodule-list');

    // Assert
    cy.findAllByRole('listitem').should('have.length', 2);
  });

  it('should navigate to project list when click on the project link', () => {
    // Arrage
    // Act
    cy.visit('/submodule-list');
    cy.findByRole('button', { name: 'Proyectos' }).as('link');
    cy.get('@link').click({ force: true });

    // Assert
    cy.url().should('eq', 'http://localhost:8080/#/projects');
  });

  it('should have the name Proyectos one of the buttons', () => {
    // Arrage
    // Act
    cy.visit('/submodule-list');
    cy.findByRole('button', { name: 'Proyectos' }).as('link');

    // Assert
    cy.get('@link').contains('Proyectos');
  });

  it('should navigate to employees list when click on the employees link', () => {
    // Arrage
    // Act
    cy.visit('/submodule-list');
    cy.findByRole('button', { name: 'Empleados' }).as('link');
    cy.get('@link').click({ force: true });

    // Assert
    cy.url().should('eq', 'http://localhost:8080/#/employees');
  });

  it('should have the name Empleados one of the buttons', () => {
    // Arrage
    // Act
    cy.visit('/submodule-list');
    cy.findByRole('button', { name: 'Empleados' }).as('link');

    // Assert
    cy.get('@link').contains('Empleados');
  });
});
