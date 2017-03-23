class CreateSandwiches < ActiveRecord::Migration[5.0]
  def change
    create_table :sandwiches do |t|
      t.integer :quantity
      t.integer :price
      
      t.timestamps
    end
  end
end
