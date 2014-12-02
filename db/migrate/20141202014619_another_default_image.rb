class AnotherDefaultImage < ActiveRecord::Migration
  def change
    change_column :flights, :photo_url, :string, default: 'https://www.filepicker.io/api/file/ua8Dx3FWTcq20wWJpndS', null: false
  end
end
