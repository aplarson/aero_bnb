# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20141205213235) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "airports", force: true do |t|
    t.string   "icao_code",                null: false
    t.string   "iata_code"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "name",                     null: false
    t.float    "latitude",   default: 0.0, null: false
    t.float    "longitude",  default: 0.0, null: false
  end

  create_table "comments", force: true do |t|
    t.integer  "author_id",        null: false
    t.integer  "commentable_id",   null: false
    t.string   "commentable_type", null: false
    t.text     "content",          null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "comments", ["author_id"], name: "index_comments_on_author_id", using: :btree
  add_index "comments", ["commentable_id", "commentable_type"], name: "index_comments_on_commentable_id_and_commentable_type", using: :btree

  create_table "flights", force: true do |t|
    t.integer  "owner_id",                                                   null: false
    t.date     "departure_date",                                             null: false
    t.integer  "departure_airport_id",                                       null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "aircraft",                                                   null: false
    t.text     "description"
    t.integer  "passengers",                                                 null: false
    t.integer  "price",                                                      null: false
    t.string   "photo_url",            default: "/assets/default_plane.jpg", null: false
  end

  add_index "flights", ["departure_airport_id"], name: "index_flights_on_departure_airport_id", using: :btree
  add_index "flights", ["owner_id"], name: "index_flights_on_owner_id", using: :btree

  create_table "reservations", force: true do |t|
    t.integer  "flight_id",  null: false
    t.integer  "user_id",    null: false
    t.integer  "passengers", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "reservations", ["flight_id"], name: "index_reservations_on_flight_id", using: :btree
  add_index "reservations", ["user_id"], name: "index_reservations_on_user_id", using: :btree

  create_table "users", force: true do |t|
    t.string   "username",                                                                            null: false
    t.string   "password_digest",                                                                     null: false
    t.string   "session_token",                                                                       null: false
    t.string   "email",                                                                               null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.text     "description"
    t.string   "photo_url",       default: "https://www.filepicker.io/api/file/3I8YrKyhR4i8A4RAzZB6", null: false
  end

  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
