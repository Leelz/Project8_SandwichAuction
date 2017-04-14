class Sandwich < ApplicationRecord
	belongs_to :user, optional: true

	has_many :orders
	has_many :ordered_by, through: :orders, source: :user
end
