Rails.application.routes.draw do
  root "articles#index"
  get "/articles", to: "articles#index"
  get "/articles/:id", to: "articles#show"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
 
  get "/dashboard", to: "articles#index", as: "index_articles"
  get "/history", to: "articles#history", as: "history_articles"
  
  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check


  resources :articles
  # Defines the root path route ("/")
  # root "posts#index"
end
