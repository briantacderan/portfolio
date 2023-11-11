class CreateWorks < ActiveRecord::Migration[6.1]
  def change

    create_table :works do |t|
      t.string :name
      t.string :image
      t.string :wide
      t.string :description
      t.integer :price
      t.references :menu
      t.timestamps
    end
  end
end
