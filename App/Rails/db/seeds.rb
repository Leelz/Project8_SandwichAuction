Customer.delete_all()
Sandwich.delete_all()

c1 = Customer.create( {name: 'Adam'} )
c2 = Customer.create( {name: 'George'} )

Sandwich.create( { customer_id: c1.id, filling: 'chicken tikka', bread: "panini", quantity: 4, price: 10.00 } )

Sandwich.create( { customer_id: c1.id, filling: 'coronation chicken', bread: "soft bap", quantity: 2, price: 4.00 } )

Sandwich.create( { customer_id: c2.id, filling: 'falafal', bread: "brioche", quantity: 1, price: 2.00 } )
