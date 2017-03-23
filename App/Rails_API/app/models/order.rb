class Order < ApplicationRecord
  has_many :orderedsandwiches
  has_many :sandwiches, {through: :orderedsandwiches}
end
