class CreateSandwiches < ActiveRecord::Migration[5.0]
  def change
    create_table :sandwiches do |t|
      t.string :bread
      t.string :filling
      t.float :price
      t.date :date
      t.integer :time

      t.timestamps
    end
  end
end
