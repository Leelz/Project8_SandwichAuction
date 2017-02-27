class CreateGigs < ActiveRecord::Migration[5.0]
  def change
    create_table :gigs do |t|
      t.integer :price
      t.datetime :date
      t.references :artist, foreign_key: true
      t.references :venue, foreign_key: true

      t.timestamps
    end
  end
end
