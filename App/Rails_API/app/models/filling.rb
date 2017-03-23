class Filling < ApplicationRecord
  has_many( :fillingchoices )
  has_many( :sandwiches, {through: :fillingchoices} )
end
