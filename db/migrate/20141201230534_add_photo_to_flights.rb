class AddPhotoToFlights < ActiveRecord::Migration
  def change
    add_column :flights, :photo_url, :string
  end
end
