Rails.application.routes.draw do
  resources :hosts
  resources :reviews
  resources :users
  resources :listings


  post '/signup', to: "users#create"
  post "/login", to: "sessions#create" #creates a new session
  delete "/logout", to: "sessions#destroy" # log out, deletes the session
  get "/me", to: "users#show" # stay login, see what user is currently logged in 

end
