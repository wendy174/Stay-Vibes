class Review < ApplicationRecord
    belongs_to :listing 
    belongs_to :user
    validates :comment, presence: true
    validates :comment, length: {in: 5..250}
end
