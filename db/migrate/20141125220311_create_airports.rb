class CreateAirports < ActiveRecord::Migration
  def change
    create_table :airports do |t|
      t.string :icao_code, null: false
      t.string :iata_code

      t.timestamps
    end
  end
end
