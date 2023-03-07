class ListingsController < ApplicationController
    rescue_from Active::RecordNotFound, with: :listing_not_found
    def index 
        listings = Listing.all 
        render json: listings
    end
   

    def show
        render json: Listing.find(params[:id]), status: :ok
    end

    def create
        render json: Listing.create(listing_params), status: :created  
    end

    def update
        listings = Listing.find(params[:id])
        render json = listings.update(listing_params), status: :ok
    end


    def destroy
        listings = Listing.find(params[:id])
        listings.destroy
        head :no_content
    end




private 

    def listings_params
        params.permit(:description, :price, :city, :state, :num_bedrooms, :num_bathrooms, :image, :host_id)
    end
    
    def listing_not_found
        render json: { error: "Listing not found"}, status: :not_found
    end

end