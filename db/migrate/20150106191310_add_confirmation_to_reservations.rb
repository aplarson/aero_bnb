class AddConfirmationToReservations < ActiveRecord::Migration
  def change
    add_column :reservations, :confirmation_status, :string, null: false, default: "UNCONFIRMED"
  end
end
