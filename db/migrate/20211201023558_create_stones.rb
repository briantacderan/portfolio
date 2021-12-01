class CreateStones < ActiveRecord::Migration[6.1]
  def change
    create_table :stones do |t|
      t.string :stacks, array: true
      t.string :racks, array: true
      t.string :tags, array: true
      t.references :project
      t.timestamps
    end
    
    add_index :stones, :stacks, using: 'gin'
    add_index :stones, :racks, using: 'gin'
    add_index :stones, :tags, using: 'gin'
  end
end
