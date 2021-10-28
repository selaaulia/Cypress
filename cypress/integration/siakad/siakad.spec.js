context ('Login siakad', () =>{
    it ('Login', () =>{
        cy .visit('http://siakad.polinema.ac.id/')
        cy .get('#username').type('1941720196')
        cy .get('#password').type('sela1307')
        cy.get('#form_login > div.form-actions > button').click()
    })
})
