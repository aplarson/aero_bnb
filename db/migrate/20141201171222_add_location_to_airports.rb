class AddLocationToAirports < ActiveRecord::Migration
  def change
    add_column :airports, :latitude, :float, default: 0.0, null: false
    add_column :airports, :longitude, :float, default: 0.0, null: false
  end
end
