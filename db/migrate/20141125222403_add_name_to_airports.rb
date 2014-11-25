class AddNameToAirports < ActiveRecord::Migration
  def change
    add_column :airports, :name, :string, null: false
  end
end
