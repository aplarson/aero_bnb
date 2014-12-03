class CorrectProfileDefaultImage < ActiveRecord::Migration
  def change
    change_column :users, :photo_url, :string, default: '/assets/profile_default.jpg', null: false
  end
end
