class CreateFlights < ActiveRecord::Migration
  def change
    create_table :flights do |t|
      t.integer :owner_id, null: false
      t.datetime :departure_date, null: false
      t.integer :departure_airport_id, null: false

      t.timestamps
    end

    add_index :flights, :owner_id
    add_index :flights, :departure_airport_id
  end
end
