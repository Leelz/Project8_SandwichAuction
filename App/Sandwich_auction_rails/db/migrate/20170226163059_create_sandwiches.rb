class CreateSandwiches < ActiveRecord::Migration[5.0]
  def change
    create_table :sandwiches do |t|
      t.string :filling
      t.string :bread
      t.integer :quantity
      t.integer :price
      t.references :customer, foreign_key: true

      t.timestamps
    end
  end
end
