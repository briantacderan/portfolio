class CreateSkills < ActiveRecord::Migration[6.1]
  def change
    create_table :skills do |t|
      t.string :name
      t.string :icon
      t.string :cert
      t.timestamps
    end
  end
end
