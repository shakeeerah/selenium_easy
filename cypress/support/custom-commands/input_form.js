import { faker } from '@faker-js/faker';



let selector
let data

before(()=>{

    cy.fixture('elements').then((attri) =>{
    selector = attri.userElement
    data = attri.userData
}) 
})
Cypress.Commands.add('clickAnElement', (element)=>{
    cy.get(element).should('be.visible').and('exist').click()

})
Cypress.Commands.add('typeAText', (textField, text)=>{
    cy.get(textField).should('be.visible').type(text)
})
Cypress.Commands.add('inputForms', () =>{
    cy.clickAnElement(selector.inputFormLink)
    cy.clickAnElement(selector.inputFormSubmit)
    cy.typeAtext(selector.firstNameField, faker.phone.number())
    cylog(faker.phone.number())

    
})

h