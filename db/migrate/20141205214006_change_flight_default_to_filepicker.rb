class ChangeFlightDefaultToFilepicker < ActiveRecord::Migration
  def change
    change_column :flights, :photo_url, :string, default: 'https://www.filepicker.io/api/file/TOTgxUTGQeCekebondEu', null: false
    
  end
end
