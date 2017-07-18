Rails.application.routes.draw do
  devise_for :users, controllers: { omniauth_callbacks: "callbacks"}
  root 'static_pages#new_index'

  get '/about' => 'static_pages#about'

  get '/table' => 'static_pages#table'

  get '/new-index' => 'static_pages#new_index'

  # get 'practice' => 'static_pages#practice'
 
  resources :videos
end
