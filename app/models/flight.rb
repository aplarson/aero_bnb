# == Schema Information
#
# Table name: flights
#
#  id                   :integer          not null, primary key
#  owner_id             :integer          not null
#  departure_date       :datetime         not null
#  departure_airport_id :integer          not null
#  created_at           :datetime
#  updated_at           :datetime
#

class Flight < ActiveRecord::Base
  validates :owner, :departure_date, :departure_airport, presence: true

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
end
