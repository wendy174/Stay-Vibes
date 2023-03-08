class ApplicationController < ActionController::API
    rescue_from ActiveRecord::RecordInvalid, with: :app_invalid

    include ActionController::Cookies

    def hello_world
        session[:count] = (session[:count] || 0) + 1
        render json: { count: session[:count] }
    end





      # private 
      
    def app_invalid(error)
        render json: { error: error.message}, status:422
    end
  end
