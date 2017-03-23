Order.delete_all()
Fillingchoice.delete_all()
Filling.delete_all()
Orderedsandwich.delete_all()
Sandwich.delete_all()
Bread.delete_all()

f1 = Filling.create( {filling: 'ham and cheese'} )
f2 = Filling.create( {filling: 'pesto and pork'} )
f3 = Filling.create( {filling: 'salami'} )

o1 = Order.create( {date: "2017-01-14"} )
o2 = Order.create( {date: "2017-01-07"} )
o3 = Order.create( {date: "2017-01-01"} )

b1 = Bread.create( {name: "brioche"} )
b2 = Bread.create( {name: "soft bap"} )
b3 = Bread.create( {name: "panini"} )

s1 = Sandwich.create( { quantity: 4, price: 10.00, bread_id: b1.id} )
s2 = Sandwich.create( { quantity: 6, price: 12.00, bread_id: b2.id} )
s3 = Sandwich.create( { quantity: 10, price: 15.00, bread_id: b3.id} )

Orderedsandwich.create( {order_id: o1.id, sandwich_id: s1.id} )
Orderedsandwich.create( {order_id: o2.id, sandwich_id: s2.id} )
Orderedsandwich.create( {order_id: o3.id, sandwich_id: s3.id} )

Fillingchoice.create( {filling_id: f1.id, sandwich_id: s1.id})
Fillingchoice.create( {filling_id: f2.id, sandwich_id: s2.id})
Fillingchoice.create( {filling_id: f3.id, sandwich_id: s3.id})
