class Orderedsandwich < ApplicationRecord
  belongs_to :order
  belongs_to :sandwich
end
