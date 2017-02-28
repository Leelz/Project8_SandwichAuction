class AddNameToBread < ActiveRecord::Migration[5.0]
  def change
    add_column :breads, :name, :string
  end
end
