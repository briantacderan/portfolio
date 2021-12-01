class AddTabsToStones < ActiveRecord::Migration[6.1]
  def change
    add_column :stones, :tabs, :string
  end
end
