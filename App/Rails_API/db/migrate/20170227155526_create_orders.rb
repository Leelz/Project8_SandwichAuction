class CreateOrders < ActiveRecord::Migration[5.0]
  def change
    create_table :orders do |t|
      t.integer :price
      t.datetime :date
      t.integer :quantity
      
      t.timestamps
    end
  end
end
