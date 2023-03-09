class User < ApplicationRecord
    has_secure_password

    has_many :reviews, dependent: :destroy
    has_many :listings, through: :reviews 

    validates :email, presence: true

end
