class Sandwich < ApplicationRecord
  has_many( :fillingchoices )
  has_many( :fillings, {through: :fillingchoices} )

  has_many( :orderedsandwiches )
  has_many( :orders, {through: :ordereredsandwiches} )

  belongs_to :bread
end
