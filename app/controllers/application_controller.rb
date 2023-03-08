class ApplicationController < ActionController::API
    rescue_from ActiveRecord::RecordInvalid, with: :invalid
    include ActionController::Cookies

    def hello_world
        session[:count] = (session[:count] || 0) + 1
        render json: { count: session[:count] }
      end





      private 
      
    def invalid(error)
        render json: { error: error.message}, status:422
    end
  end
