# == Schema Information
#
# Table name: airports
#
#  id         :integer          not null, primary key
#  icao_code  :string(255)      not null
#  iata_code  :string(255)
#  created_at :datetime
#  updated_at :datetime
#  name       :string(255)      not null
#

class Airport < ActiveRecord::Base
  validates :icao_code, :latitude, :longitude, presence: true
  validates :icao_code, uniqueness: true

  has_many(
    :departures,
    class_name: "Flight",
    foreign_key: :departure_airport_id,
    primary_key: :id
  )
end
