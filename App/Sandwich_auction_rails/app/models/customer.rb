class Customer < ApplicationRecord
  has_many( :sandwiches )
end
