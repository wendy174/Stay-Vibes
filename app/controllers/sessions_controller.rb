class SessionsController < ApplicationController

    def create
        user = User.find_by(email: user_params[:email])
        if user && user.authenticate(user_params[:password])
          session[:user_id] = user.id
          render json: user, status: :ok
        else
          render json: { error: "Invalid email or password" }, status: :unprocessable_entity
        end
      end


    def destroy # will clear username of session 
        session.delete :user_id
        head :no_content
    end
    private

  def user_params
    params.require(:session).permit(:email, :password)
  end
end
