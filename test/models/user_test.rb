# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string(255)      not null
#  password_digest :string(255)      not null
#  session_token   :string(255)      not null
#  email           :string(255)      not null
#  created_at      :datetime
#  updated_at      :datetime
#  description     :text
#  photo_url       :string(255)      default("/assets/profile_default.jpg"), not null
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
