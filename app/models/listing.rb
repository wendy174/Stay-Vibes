class Listing < ApplicationRecord
    has_many :reviews, dependent: :destroy
    has_many :users, through: :reviews 
    belongs_to :host 
    validates :description, :price, :city, :state, :num_bedrooms, :num_bathrooms, :image,
    :presence => true
    validates :description, length: { in: 30..500 }
end
