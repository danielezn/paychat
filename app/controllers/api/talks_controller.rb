class Api::TalksController < Api::BaseController
  require 'twilio-ruby'
  skip_before_action :require_login!, only: [:create, :token]

  def index
  end

  def token
    begin
      # Required for any Twilio Access Token
      account_sid = Rails.application.credentials.ACCOUNT_SID
      api_key = Rails.application.credentials.API_KEY_SID
      api_secret = Rails.application.credentials.API_KEY_SECRET

      identity = Faker::Internet.user_name

      # Create Video grant for our token
      video_grant = Twilio::JWT::AccessToken::VideoGrant.new
      video_grant.room = 'cool room'

      # Create an Access Token
      token = Twilio::JWT::AccessToken.new(
        account_sid,
        api_key,
        api_secret,
        [video_grant],
        identity: identity
      )
      render json: {:identity => identity, :token => token.to_jwt}, status: :ok
    rescue => e
      render json: {error: e.to_s}, status: 500
    end
  end
end