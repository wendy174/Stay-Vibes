Rails.application.routes.draw do
  resources :hosts
  resources :reviews
  resources :users
  resources :listings


  post "/login", to: "sessions#create"
  get "/me", to: "users#show" # stay login 
  delete "/logout", to: "sessions#destroy" # log out 

end
