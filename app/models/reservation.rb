# == Schema Information
#
# Table name: reservations
#
#  id         :integer          not null, primary key
#  flight_id  :integer          not null
#  user_id    :integer          not null
#  passengers :integer          not null
#  created_at :datetime
#  updated_at :datetime
#

class Reservation < ActiveRecord::Base
  validates :user, :flight, :passengers, presence: true

  belongs_to :user
  belongs_to :flight
end
