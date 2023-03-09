class ApplicationController < ActionController::API
    rescue_from ActiveRecord::RecordInvalid, with: :app_invalid
    include ActionController::Cookies
    before_action :authorize # before run controller action makes sure the person logged in 






    private 
      
    def app_invalid(error)
        render json: { error: error.message}, status:422
    end

    def authorize 
      # The @current_user gives access to this variable in all of controllers 
      # will find the user that is logged in or tell us no user is logged in 
      # sessions[:user_id] finds who is currently logged in, 
      # whoever is logged in will be set to current user 
      render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
      end
  end
