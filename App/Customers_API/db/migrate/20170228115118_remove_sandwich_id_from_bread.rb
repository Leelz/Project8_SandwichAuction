class RemoveSandwichIdFromBread < ActiveRecord::Migration[5.0]
  def change
    remove_reference :breads, :sandwich, foreign_key: true
  end
end
