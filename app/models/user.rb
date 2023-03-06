class User < ApplicationRecord
    has_many :reviews 
    has_many :listings, through: :reviews 
end
