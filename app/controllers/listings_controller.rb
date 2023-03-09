class ListingsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    before_action :set_access_control_headers

    def index 
        listings = Listing.all 
        render json: listings
    end
   

    def show
        render json: Listing.find(params[:id]), status: :ok
    end

    def create
        render json: Listing.create!(listing_params), status: :created  
    end

    def update
        listings = Listing.find(params[:id])
        render json = listings.update!(listing_params), status: :ok
    end


    def destroy
        listings = Listing.find(params[:id])
        listings.destroy
        head :no_content
    end

    def destroy_review
        review = Review.find(params[:id])
        review.destroy
        head :no_content
      end


    private 

    def listings_params
        params.permit(:description, :price, :city, :state, :num_bedrooms, :num_bathrooms, :image, :host_id)
    end
    
    # def listing_not_found
    #     render json: { error: "Listing not found"}, status: :not_found
    # end
    def render_not_found_response
        render json: { error: "Listing Not found" }, status: :not_found
    end

    def set_access_control_headers
        headers['Access-Control-Allow-Origin'] = 'http://localhost:4000'
        headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, PATCH, DELETE, OPTIONS'
        headers['Access-Control-Allow-Headers'] = 'Origin, Content-Type, Accept, Authorization, Token'
    end

end