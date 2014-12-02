class LocalDefaultFlightImage < ActiveRecord::Migration
  def change
    change_column :flights, :photo_url, :string, default: '/assets/default_plane.jpg', null: false
  end
end
