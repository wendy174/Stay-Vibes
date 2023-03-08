class SessionsController < ApplicationController

    def create 
        # set cookie by writing their user id into sessions hash 
        user = User.find_by(username: params[:username])
        session[:user_id] = user.id
        render json: user
    end


    def destroy # will clear username of session 
        session.delete :user_id
        head :no_content
    end
end
