let selector
let selector1

describe('selenium-easy tests', () => {

  before(()=>{
    cy.fixture('elements').then((attri)=>{
      selector = attri.userElement;
      selector1 = attri.userElementList
    })
  })
  it('check the input form', () => {
    cy.inputForms()
  })
  
  it('test the List Box', () => {
    cy.listBox()
  })
})