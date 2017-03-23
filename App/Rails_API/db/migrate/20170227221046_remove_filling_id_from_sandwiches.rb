class RemoveFillingIdFromSandwiches < ActiveRecord::Migration[5.0]
  def change
    remove_reference :sandwiches, :filling, foreign_key: true
  end
end
