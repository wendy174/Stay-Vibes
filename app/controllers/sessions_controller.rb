class SessionsController < ApplicationController
    # only use authorize method on 'sessions#create' 
    # want to authorize when we create a new session 
    skip_before_action :authorize, only: :create 


    def create 
        # set cookie by writing their user id into sessions hash 
        user = User.find_by(email: params[:email])
        # create session and store user id 
        # authenticate below uses bcrypt to use authorize method 
        # user and password must match to log in user 
        if user&.authenticate(params[:password]) # checks to see if user exist 
            session[:user_id] = user.id # set user as user in sessions 
            render json: user
        else 
            render json: { error: "Please use an existing username or password"}, status: :unauthorized
        end 

  
    end


    def destroy # will clear username out of session 
        session.delete :user_id
        head :no_content
    end

end
