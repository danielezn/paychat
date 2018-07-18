require_relative 'boot'

require 'rails/all'

Bundler.require(*Rails.groups)

module PayChat
  class Application < Rails::Application
    config.load_defaults 5.1
    config.api_only = true
    config.generators.stylesheets = false
    config.generators.javascripts = false
  end
end
