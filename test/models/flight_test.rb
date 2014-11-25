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

require 'test_helper'

class FlightTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
