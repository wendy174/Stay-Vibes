class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :comment, :listing_id, :user_id 
end
