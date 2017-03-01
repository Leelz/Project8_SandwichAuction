# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170228161052) do

  create_table "breads", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "name"
  end

  create_table "fillingchoices", force: :cascade do |t|
    t.integer  "filling_id"
    t.integer  "sandwich_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["filling_id"], name: "index_fillingchoices_on_filling_id"
    t.index ["sandwich_id"], name: "index_fillingchoices_on_sandwich_id"
  end

  create_table "fillings", force: :cascade do |t|
    t.string   "filling"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "orderedsandwiches", force: :cascade do |t|
    t.integer  "order_id"
    t.integer  "sandwich_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["order_id"], name: "index_orderedsandwiches_on_order_id"
    t.index ["sandwich_id"], name: "index_orderedsandwiches_on_sandwich_id"
  end

  create_table "orders", force: :cascade do |t|
    t.datetime "date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "sandwiches", force: :cascade do |t|
    t.integer  "quantity"
    t.integer  "price"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "bread_id"
    t.index ["bread_id"], name: "index_sandwiches_on_bread_id"
  end

end
