# == Schema Information
#
# Table name: comments
#
#  id               :integer          not null, primary key
#  author_id        :integer          not null
#  commentable_id   :integer          not null
#  commentable_type :string(255)      not null
#  content          :text             not null
#  created_at       :datetime
#  updated_at       :datetime
#

class Comment < ActiveRecord::Base
  validates :author, :commentable, :content, presence: true
  
  belongs_to :author, class_name: "User"
  belongs_to :commentable, polymorphic: true
end
