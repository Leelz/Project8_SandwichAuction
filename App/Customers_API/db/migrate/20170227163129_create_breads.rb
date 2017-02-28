class CreateBreads < ActiveRecord::Migration[5.0]
  def change
    create_table :breads do |t|
      t.string :bread

      t.timestamps
    end
  end
end
