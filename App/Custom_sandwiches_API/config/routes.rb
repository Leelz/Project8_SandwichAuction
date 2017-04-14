Rails.application.routes.draw do

  devise_for :users, :controllers => {sessions: 'sessions', registrations: 'registrations'}
  
  scope path: "api" do
    resources :sandwiches, defaults: {format: :json}
  end

  resources :users

#     Rails.application.routes.draw do
#   devise_for :users
#   get 'accounts' => 'accounts#index'
# end

end