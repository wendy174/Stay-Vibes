class ListingsController < ApplicationController
    def index 
        listing = Listing.all 
        render json: listing 
    end
end
