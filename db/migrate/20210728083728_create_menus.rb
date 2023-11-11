class CreateMenus < ActiveRecord::Migration[6.1]
  def change

    create_table :menus do |t|
      t.string :talent
      t.string :name
      t.string :info
      t.string :city
      t.string :photo
      t.timestamps null: false
    end
  end
end
