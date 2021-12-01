class AddStacksToStones < ActiveRecord::Migration[6.1]
  def change
    add_column :stones, :stacks, :string
  end
end
