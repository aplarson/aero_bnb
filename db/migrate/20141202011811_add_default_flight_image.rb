class AddDefaultFlightImage < ActiveRecord::Migration
  def change
    change_column :flights, :photo_url, :string, default: 'default_plane.jpg', null: false
  end
end
