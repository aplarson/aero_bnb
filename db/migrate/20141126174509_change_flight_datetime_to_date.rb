class ChangeFlightDatetimeToDate < ActiveRecord::Migration
  def change
    change_column :flights, :departure_date, :date
  end
end
