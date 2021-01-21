Rails.application.routes.draw do
    
  root 'pages#welcome'
  get 'about' => 'pages#about'
  get 'contact' => 'pages#contact'
    
end
