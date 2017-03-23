class AddSandwichIdToBread < ActiveRecord::Migration[5.0]
  def change
    add_reference :breads, :sandwich, foreign_key: true
  end
end
