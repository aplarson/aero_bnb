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
#  photo_url       :string(255)      default("https://www.filepicker.io/api/file/3I8YrKyhR4i8A4RAzZB6"), not null
#

class User < ActiveRecord::Base
  attr_reader :password

  validates :email, :username, :session_token, :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :username, :session_token, :email, uniqueness: true

  after_initialize :ensure_session_token

  has_many(
    :owned_flights,
    class_name: "Flight",
    foreign_key: :owner_id,
    primary_key: :id,
    dependent: :destroy
  )

  has_many :reservations, dependent: :destroy

  has_many :reserved_flights, through: :reservations, source: :flight

  has_many :authored_comments, class_name: "Comment", foreign_key: :author_id, dependent: :destroy

  has_many :comments, as: :commentable, dependent: :destroy
  
  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    return user if user && user.is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= generate_session_token
  end

  def generate_session_token
    SecureRandom.urlsafe_base64
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = generate_session_token
    self.save
    self.session_token
  end


end
