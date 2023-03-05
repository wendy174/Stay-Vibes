class Host < ApplicationRecord
    has_many :listings 
    validates :name, presence: true
end
