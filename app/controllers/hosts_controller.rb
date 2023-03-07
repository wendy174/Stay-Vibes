class HostsController < ApplicationController
rescue_from Active::RecordNotFound, with: :host_not_found
    def index 
        hosts = Host.all 
        render json: hosts, status: :ok
    end

    def show
        render json: Host.find(params[:id]), status: :ok
    end

    def create
        render json: Host.create(host_params), status: :created  
    end

    def update
        hosts = Host.find(params[:id])
        render json = Host.update(host_params), status: :ok
    end


    def destroy
        hosts = Host.find(params[:id])
        hosts.destroy
        head :no_content
    end




private 

    def host_params
        params.permit(:name)
    end
    
    def host_not_found
        render json: { error: "Host not found"}, status: :not_found
    end

end