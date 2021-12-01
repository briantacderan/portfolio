class CreateStones < ActiveRecord::Migration[6.1]
  def change
    create_table :stones do |t|
      t.integer :order
      t.references :project
      t.timestamps
    end
  end
end
