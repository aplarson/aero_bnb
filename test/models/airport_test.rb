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

require 'test_helper'

class AirportTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
