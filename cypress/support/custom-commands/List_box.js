let selector1
let data

before(()=>{

    cy.fixture('elements').then((attri) =>{
    selector1 = attri.userElementList
   
}) 
})
Cypress.Commands.add('clickAnElementList', (element)=>{
    cy.get(element).should('be.visible').and('exist').click()

})
Cypress.Commands.add('typeATextList', (textField, text)=>{
    cy.get(textField).should('be.visible').type(text)
})
Cypress.Commands.add('listBox', ()=>{
    cy.clickAnElementList(selector1.listBox)
    cy.clickAnElementList(selector1.bootstarpListBox)
    cy.clickAnElementList(selector1.bootStrapDualList) //select item
    cy.clickAnElementList(selector1.PortaAcConsecteturAc) //select item
    cy.clickAnElementList(selector1.rightArrowButton) // move to the right
    cy.clickAnElementList(selector1.leftCheckBox) // select every item  here
    cy.clickAnElementList(selector1.rightArrowButton)  // move to the right
    cy.clickAnElementList(selector1.leftCheckBox) //uncheck the box
    cy.clickAnElementList(selector1.leftArrowButton) // move selected items to the left
    cy.clickAnElementList(selector1.bootStrapDualList)  //unselect item
    cy.clickAnElementList(selector1.PortaAcConsecteturAc) //unselect item
    cy.clickAnElementList(selector1.dapibusAcFacilisisIn) //unselect item
    cy.clickAnElementList(selector1.morbiLeoRisus)  //unselect item
    cy.clickAnElementList(selector1.VestibulumAtEros) //unselect item
    cy.get(selector1.rightSearchField).type("Morbi")  // search an item
    .clickAnElementList(selector1.morbiLeoRisusR)
    .clickAnElementList(selector1.leftArrowButton)
    cy.get(selector1.rightSearchField).clear() //clear the search box 
    cy.clickAnElementList(selector1.rightCheckBox)
    cy.clickAnElementList(selector1.leftArrowButton) //move all items to  the left
    cy.get(selector1.morbiLeoRisusR).should('not.exist') // check that the element doesn't exist on the right again
    cy.get(selector1.newmorbiLeoRisusR).should('exist') // check that the element now exist on the left
   
})
