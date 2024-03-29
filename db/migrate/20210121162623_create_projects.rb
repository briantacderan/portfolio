class CreateProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :projects do |t|
      t.string :title
      t.string :type_of
      t.string :main
      t.string :main_framework
      t.string :description
      t.string :image
      t.string :git_url
      t.string :website_url
      t.string :preview_file
      t.string :additional_info
      t.string :id_tag
      t.timestamps
    end
  end
end
