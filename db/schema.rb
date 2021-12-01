# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_12_01_023558) do

  create_table "capstones", force: :cascade do |t|
    t.string "title"
    t.string "type_of"
    t.string "main"
    t.string "main_framework"
    t.string "description"
    t.string "image"
    t.string "git_url"
    t.string "website"
    t.string "additional_info"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "contacts", force: :cascade do |t|
    t.string "title"
    t.string "url"
    t.string "fa_class"
    t.string "fa_key"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "projects", force: :cascade do |t|
    t.string "title"
    t.string "type_of"
    t.string "main"
    t.string "main_framework"
    t.string "description"
    t.string "image"
    t.string "git_url"
    t.string "website_url"
    t.string "preview_file"
    t.string "additional_info"
    t.string "id_tag"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "skills", force: :cascade do |t|
    t.string "name"
    t.string "icon"
    t.string "cert"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "stones", force: :cascade do |t|
    t.string "stacks"
    t.string "racks"
    t.string "tags"
    t.integer "project_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["project_id"], name: "index_stones_on_project_id"
    t.index ["racks"], name: "index_stones_on_racks"
    t.index ["stacks"], name: "index_stones_on_stacks"
    t.index ["tags"], name: "index_stones_on_tags"
  end

end
