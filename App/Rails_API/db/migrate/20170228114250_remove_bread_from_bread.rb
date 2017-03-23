class RemoveBreadFromBread < ActiveRecord::Migration[5.0]
  def change
    remove_column :breads, :bread
  end
end
