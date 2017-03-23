# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Album.delete_all()
Artist.delete_all()
Gig.delete_all()
Venue.delete_all()

a1 = Artist.create({name: 'Iron Maiden'})
a2 = Artist.create({name: 'Twisted Sister'})

Album.create({artist: a1, title: 'Number of the Beast'})
Album.create({artist: a2, title: 'Stay Hungry'})

v1 = Venue.create( {name: 'Hammersmith Odeon',
  location: 'London'})
v2 = Venue.create( {name: 'Playhouse',
  location: 'Edinburgh'})

Gig.create({ price: 10, date: "2017-01-14", artist: a1, venue: v2})
Gig.create( { price: 5, date: "2017-03-23", artist: a2, venue: v1})