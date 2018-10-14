require 'twilio-ruby'

# EDITOR=vim rails credentials:edit

# put your own credentials here
account_sid = PayChat::Application.credentials.ACCOUNT_SID
auth_token = PayChat::Application.credentials.TWILIO_AUTH_TOKEN

# set up a client to talk to the Twilio REST API
@video = Twilio::REST::Client.new account_sid, auth_token