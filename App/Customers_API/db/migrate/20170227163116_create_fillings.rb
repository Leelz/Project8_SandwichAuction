class CreateFillings < ActiveRecord::Migration[5.0]
  def change
    create_table :fillings do |t|
      t.string :filling

      t.timestamps
    end
  end
end
