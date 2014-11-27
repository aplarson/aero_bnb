class CreateReservations < ActiveRecord::Migration
  def change
    create_table :reservations do |t|
      t.integer :flight_id, null: false
      t.integer :user_id, null: false
      t.integer :passengers, null: false

      t.timestamps
    end

    add_index :reservations, :flight_id
    add_index :reservations, :user_id
  end
end
