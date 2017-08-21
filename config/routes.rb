Rails.application.routes.draw do
  devise_for :users
  root 'dashboard#index'
  get '*path', to: 'dashboard#index'
  namespace :api, :defaults => {:format => :json}, :path => "", :constraints => {:subdomain => "api"} do
    namespace :v1 do
      # Usuario
      ## Autenticacion
      ## Crear Usuario
      ## Editar Usuario
      ## Obtener Usuario

      # Medios de Pagos
      ## Agregar medios de pagos
      ## Editar medios de pagos
      ## Eliminar medios de pagos
      ## Obtener medios de pagos


      # Conferencias
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
end

# class API::PeopleController < ApplicationController
# end

# Token authentication
# http://www.mccartie.com/2016/11/03/token-based-api-authentication.html