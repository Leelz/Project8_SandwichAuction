class CreateFillingchoices < ActiveRecord::Migration[5.0]
  def change
    create_table :fillingchoices do |t|
      t.references :filling, foreign_key: true
      t.references :sandwich, foreign_key: true

      t.timestamps
    end
  end
end
