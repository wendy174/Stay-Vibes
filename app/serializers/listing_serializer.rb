class ListingSerializer < ActiveModel::Serializer
  attributes :id, :description, :price, :city, :state, :num_bedrooms, :num_bathrooms, :image, :host_id

  has_many :reviews
end
