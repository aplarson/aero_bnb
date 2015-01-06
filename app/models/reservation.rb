# == Schema Information
#
# Table name: reservations
#
#  id                  :integer          not null, primary key
#  flight_id           :integer          not null
#  user_id             :integer          not null
#  passengers          :integer          not null
#  created_at          :datetime
#  updated_at          :datetime
#  confirmation_status :string(255)      default("UNCONFIRMED"), not null
#

class Reservation < ActiveRecord::Base
  validates :user, :flight, :passengers, presence: true
  validates :confirmation_status, inclusion: { in: ["UNCONFIRMED",
                                                    "CONFIRMED",
                                                    "REJECTED"] }
  validate :flight_has_enough_seats, on: :create

  belongs_to :user
  belongs_to :flight
  has_one :departure_airport, through: :flight, source: :departure_airport

  private

  def flight_has_enough_seats
    unless flight.passengers - flight.reserved_seats >= self.passengers
      self.errors[:seats] = ["can't reserve more than the remaining seats"]
    end
  end
end
