class CreateContacts < ActiveRecord::Migration[6.1]
  def change
    create_table :contacts do |t|
      t.string :title
      t.string :url
      t.string :class
      t.string :fa_key
      t.timestamps
    end
  end
end
