class CreatePhotos < ActiveRecord::Migration[7.1]
  def change
    create_table :photos do |t|
      t.integer :photo_id, null: false
      t.integer :project_id
      t.string :project_name
      t.string :photo_url, unique: true
      t.string :description

      t.timestamps
    end
    add_index :photos, :photo_id
  end
end
