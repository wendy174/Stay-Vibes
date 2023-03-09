class ReviewsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :review_not_found
    before_action :set_access_control_headers

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

    def update_review
        review = Review.find(params[:id])
        review.update!(review_params)
        render json: review
      end


private 

    def review_params
        params.permit(:comment, :listing_id, :user_id)
    end
    
    def review_not_found
        render json: { error: "Review not found"}, status: :not_found
    end

    def set_access_control_headers
        headers['Access-Control-Allow-Origin'] = 'http://localhost:4000'
        headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, PATCH, DELETE, OPTIONS'
        headers['Access-Control-Allow-Headers'] = 'Origin, Content-Type, Accept, Authorization, Token'
    end


end
