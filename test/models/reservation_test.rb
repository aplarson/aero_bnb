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

require 'test_helper'

class ReservationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
