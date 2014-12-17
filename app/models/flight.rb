# == Schema Information
#
# Table name: flights
#
#  id                   :integer          not null, primary key
#  owner_id             :integer          not null
#  departure_date       :date             not null
#  departure_airport_id :integer          not null
#  created_at           :datetime
#  updated_at           :datetime
#  aircraft             :string(255)      not null
#  description          :text
#  passengers           :integer          not null
#  price                :integer          not null
#  photo_url            :string(255)      default("https://www.filepicker.io/api/file/TOTgxUTGQeCekebondEu"), not null
#

class Flight < ActiveRecord::Base
  validates :owner, :departure_date, :departure_airport, :aircraft, :passengers, :price, presence: true

  belongs_to(
    :owner,
    class_name: "User",
    foreign_key: :owner_id,
    primary_key: :id
  )

  belongs_to(
    :departure_airport,
    class_name: "Airport"
  )

  has_many :reservations, dependent: :destroy

  has_many :booked_passengers, through: :reservations, source: :user

  has_many :comments, as: :commentable, dependent: :destroy

  has_many :commenters, through: :comments, source: :author

  def self.search(params)
    flights = Flight.includes(:departure_airport).includes(:owner).all
    if params[:departure_date] && params[:departure_date] != ''
      flights = flights.where('departure_date = ?', params[:departure_date])
    end
    if params[:min_price] && params[:min_price] != ''
      flights = flights.where('price >= ?', params[:min_price])
    end
    if params[:max_price] && params[:max_price] != ''
      flights = flights.where('price <= ?', params[:max_price])
    end
    if params[:passengers] && params[:passengers] != ''
      flights = flights.where('passengers >= ?', params[:passengers])
    end
    if params[:airport] && params[:airport] != ''
      flights = flights.where('departure_airport_id IN (?)', params[:airport])
    end
    flights
  end

  def reserved_seats
    seats_taken = 0
    reservations.each do |reservation|
      seats_taken += reservation.passengers
    end
    seats_taken
  end
end
