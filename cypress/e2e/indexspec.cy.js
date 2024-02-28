let selector
let data

describe('selenium-easy tests', () => {

  before(()=>{
    cy.fixture('elements').then((attri)=>{
      selector = attri.userElement;
      data = attri.userData
    })
  })
  it('check the input form', () => {
    cy.inputForms()
  })
})