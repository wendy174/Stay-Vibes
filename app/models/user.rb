class User < ApplicationRecord
    has_many :reviews 
    has_many :listings, through: :reviews 
    validates :name, :user_name, :email, presence: true
    validates :email, uniqueness: true
end
