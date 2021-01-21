class CreateCapstones < ActiveRecord::Migration[6.1]
  def change
    create_table :capstones do |t|
      t.string :title
      t.string :type_of
      t.string :main
      t.string :main_framework
      t.string :description
      t.string :image
      t.string :git_url
      t.string :website
      t.string :additional_info
      t.timestamps
    end
  end
end
