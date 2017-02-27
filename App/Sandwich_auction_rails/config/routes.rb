Rails.application.routes.draw do

  resources :customers do 
    resources :sandwiches
  end

end
