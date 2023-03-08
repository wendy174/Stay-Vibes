class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :user_not_found

    def index 
        users = User.all 
        render json: users 
    end

    def show
        render json: User.find(params[:id]), status: :ok
    end

    def create
        render json: User.create(user_params), status: :created  
    end

    def update
        users = User.find(params[:id])
        render json = users.update(user_params), status: :ok
    end


    def destroy
        users = User.find(params[:id])
        users.destroy
        head :no_content
    end




private 

    def user_params
        params.permit(:description, :price, :city, :state, :num_bedrooms, :num_bathrooms, :image, :host_id)
    end
    
    def user_not_found
        render json: { error: "User not found"}, status: :not_found
    end

    def invalid(error)
        render json: { error: error.message}, status:422
    end
end
