class User < ApplicationRecord
    has_many :reviews, dependent: :destroy
    has_many :listings, through: :reviews 

    validates :name, :user_name, :email, presence: true
    validates :email, uniqueness: true

    has_secure_password 
end
