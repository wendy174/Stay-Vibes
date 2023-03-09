class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :user_not_found

    def index 
        users = User.all 
        render json: users 
    end

    def show
        user = User.find_by(id: session[:user_id])
        if user 
            render json: user
        else
          render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    def create
        user = User.new(user_params)
        if user.save
          render json: user, status: :created
        else
          render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
      end

    def update
        users = User.find(params[:id])
        render json = users.update!(user_params), status: :ok
    end


    def destroy
        users = User.find(params[:id])
        users.destroy
        head :no_content
    end




private 

def user_params
    params.require(:user).permit(:name, :email, :password)
  end
    
    def user_not_found
        render json: { error: "User not found"}, status: :not_found
    end

    def invalid(error)
        render json: { error: error.message}, status:422
    end
end
