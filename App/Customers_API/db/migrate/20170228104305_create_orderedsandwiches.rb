class CreateOrderedsandwiches < ActiveRecord::Migration[5.0]
  def change
    create_table :orderedsandwiches do |t|
      t.references :order, foreign_key: true
      t.references :sandwich, foreign_key: true

      t.timestamps
    end
  end
end
