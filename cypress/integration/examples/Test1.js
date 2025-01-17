// cypress - spec file

describe('My First Test', () => {
    it('Visits the Kitchen Sink', () => {
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
      cy.get('.search-keyword').type('ca')
      //nesse caso ta pegando um elemento invisível, então colocou pra pegar só os visiveis
      cy.get('.product:visible').should('have.length', 4)
      // pega o parent e os children
      cy.get('.products .product').should('have.length', 4)
      // o método find depois de um get procura somente no elemento que o get retornou
      cy.get('.products').find('.product').should('have.length', 4)

      // pra pegar o index usa a função eq. Começa no zero
      cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()

      //iteração
      cy.get('.products').find('.product').each(($product) => {
        const productName = $product.find('h4.product-name').text()
        if (productName.includes('Carrot')) {
          // usa o wrap pra resolver a promise
          cy.wrap($product).find('button:contains(ADD TO CART)').click()
        }
      } )
    })
  })