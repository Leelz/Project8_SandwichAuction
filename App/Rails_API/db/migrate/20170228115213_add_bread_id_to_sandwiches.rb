class AddBreadIdToSandwiches < ActiveRecord::Migration[5.0]
  def change
    add_reference :sandwiches, :bread, foreign_key: true
  end
end
