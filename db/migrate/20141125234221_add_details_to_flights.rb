class AddDetailsToFlights < ActiveRecord::Migration
  def change
    add_column :flights, :aircraft, :string, null: false
    add_column :flights, :description, :text
    add_column :flights, :passengers, :integer, null: false
    add_column :flights, :price, :integer, null: false
  end
end
