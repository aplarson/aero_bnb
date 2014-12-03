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
#  photo_url            :string(255)      default("/assets/default_plane.jpg"), not null
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

  has_many :reservations

  has_many :booked_passengers, through: :reservations, source: :user
end
