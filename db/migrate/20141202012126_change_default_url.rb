class ChangeDefaultUrl < ActiveRecord::Migration
  def change
    change_column :flights, :photo_url, :string, default: 'app/assets/images/default_plane.jpg', null: false
  end
end
