class ChangeProfileDefaultToFilepicker < ActiveRecord::Migration
  def change
    change_column :users, :photo_url, :string, default: 'https://www.filepicker.io/api/file/3I8YrKyhR4i8A4RAzZB6', null: false
  end
end
