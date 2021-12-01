class AddRacksToStones < ActiveRecord::Migration[6.1]
  def change
    add_column :stones, :racks, :string
  end
end
