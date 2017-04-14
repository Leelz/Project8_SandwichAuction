User.delete_all()
Sandwich.delete_all()
Order.delete_all()

u1 = User.create!(
 {
  email: 'adam@email.com',
  password: 'password',
  password_confirmation: 'password'
  }
 )

s1 = Sandwich.create!( 
	{ 	
		bread: 'panini', 
		filling: 'ham and cheese', 
		price: 1.50, 
		date: "2017-01-14", 
		time: 1324  
	}
)
s2 = Sandwich.create!( 
	{ 
		bread: 'wholemeal bap', 
		filling: 'pesto and pork', 
		price: 1.25, date: "2017-01-07", 
		time: 1205 
	} 
)
s3 = Sandwich.create!( 
	{ 
		bread: 'brioche', 
		filling: 'salami & egg', 
		price: 2.00, date: "2017-01-01", 
		time: 1600 
	} 
)

Order.create( {user_id: u1.id, sandwich_id: s1.id} )
Order.create( {user_id: u1.id, sandwich_id: s2.id} )
Order.create( {user_id: u1.id, sandwich_id: s3.id} )