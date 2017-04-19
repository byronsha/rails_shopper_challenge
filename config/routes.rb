Rails.application.routes.draw do
  root "static_pages#root"

  resources :applicants, only: [:create, :update, :show], :defaults => { :format => :json }
  resources :funnels, only: [:index], :defaults => { :format => :json }
end
