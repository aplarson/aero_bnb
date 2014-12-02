class FinalDefaultFlightImage < ActiveRecord::Migration
  def change
    change_column :flights, :photo_url, :string, default: 'https://www.filepicker.io/api/file/sLhClWCyROeQ83TcoaC5', null: false
  end
end
