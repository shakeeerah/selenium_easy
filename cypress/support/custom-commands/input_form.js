import { faker } from '@faker-js/faker';

const randomNum = Math.floor(Math.random()*99)
const email = faker.internet.email({
    firstName: "meezlape+",
    lastName: randomNum,
    provider: "gmail.com"
})



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
    cy.typeAText(selector.firstNameField, faker.person.firstName())
    cy.typeAText(selector.lastNameField, faker.person.lastName())
    cy.typeAText(selector.emailfield, email)
    cy.typeAText(selector.phoneField, faker.phone.number('222#######'))
    cy.typeAText(selector.addressField, faker.location.streetAddress())
    cy.typeAText(selector.cityField, faker.location.city())
    cy.get('select').select('Arizona')
    cy.typeAText(selector.zipcodeField, faker.location.zipCode())
    cy.typeAText(selector.websiteField, faker.internet.domainName())
    cy.clickAnElement(selector.hostingButton)
    cy.typeAText(selector.projectDescription, faker.lorem.sentence(5))
    cy.clickAnElement(selector.sendButtonField)
   

   

    
})

