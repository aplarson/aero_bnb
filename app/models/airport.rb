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
#  latitude   :float            default(0.0), not null
#  longitude  :float            default(0.0), not null
#

class Airport < ActiveRecord::Base
  validates :icao_code, :latitude, :longitude, :name, presence: true
  validates :icao_code, uniqueness: true

  has_many(
    :departures,
    class_name: "Flight",
    foreign_key: :departure_airport_id,
    primary_key: :id,
    dependent: :destroy
  )

  def self.search(params)
    lat_search = Airport.where(
                   "latitude BETWEEN ? AND ?",
                   params[:south],
                   params[:north]
                 )
    if params[:west] < params[:east]
      lat_search.where(
        "longitude BETWEEN ? AND ?",
        params[:west],
        params[:east]
      )
    else
      lat_search.where(
        "longitude > ? OR longitude < ?",
        params[:west],
        params[:east]
      )
    end
  end
end
