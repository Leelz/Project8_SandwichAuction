Rails.application.routes.draw do
  # get 'artists' => 'artists#index'
  # get 'artists/:id' => 'artists#show'

  resources :artists do 
    resources :gigs
  end

end
