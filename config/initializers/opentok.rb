$opentok = OpenTok::OpenTok.new(Rails.application.credentials.opentok[:api_key], Rails.application.credentials.opentok[:secret])