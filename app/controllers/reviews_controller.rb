class ReviewsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :review_not_found
    def index 
        reviews = Review.all 
        render json: reviews
    end


    def show
        render json: Review.find(params[:id]), status: :ok
    end

    def create
        render json: Review.create!(review_params), status: :created  
    end

    def update
        reviews = Review.find(params[:id])
        render json = reviews.update!(review_params), status: :ok
    end


    def destroy
        reviews = Review.find(params[:id])
        reviews.destroy
        head :no_content
    end




private 

    def review_params
        params.permit(:comment, :listing_id, :user_id)
    end
    
    def review_not_found
        render json: { error: "Review not found"}, status: :not_found
    end


end
