Rails.application.routes.draw do
  root 'dashboard#index'
  # get '*path', to: 'dashboard#index'
  namespace :api, :defaults => {:format => :json} do
    # Usuario
    # devise_for :users
    as :users do
      post   "/sign-in"       => "sessions#create"
      delete "/sign-out"      => "sessions#destroy"
      get    "/details"        => "users#details"
    end
    ## Autenticacion
    ## Crear Usuario
    ## Editar Usuario
    ## Obtener Usuario

    # Medios de Pagos
    resources :payment_methods do
    end
    ## Agregar medios de pagos
    ## Editar medios de pagos
    ## Eliminar medios de pagos
    ## Obtener medios de pagos


    # Conferencias
    resources :talks
    ## Crear conferencia
    ## Editar conferencia
    ## Cancelar conferencia
    ## Obtener conferencias

    # Pagos
    ## Hacer pago

    # Actividades
    ## Registrar actividades
    ## Obtener actividades
  end
end

# Token authentication
# http://www.mccartie.com/2016/11/03/token-based-api-authentication.html