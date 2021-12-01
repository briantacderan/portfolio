class AddTagsToStones < ActiveRecord::Migration[6.1]
  def change
    add_column :stones, :tags, :string
  end
end
