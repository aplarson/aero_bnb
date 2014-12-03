class AddDefaultProfilePicture < ActiveRecord::Migration
  def change
    change_column :users, :photo_url, :string, default: '/assets/default_plane.jpg', null: false
  end
end
