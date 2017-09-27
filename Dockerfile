FROM phusion/passenger-ruby23

# Set correct environment variables.
ENV HOME /root

# Use baseimage-docker's init process.
CMD ["/sbin/my_init"]

# additional packages
# RUN apt-get update

# Active nginx
RUN rm -f /etc/service/nginx/down

# Install bundle of gems
WORKDIR /tmp
ADD Gemfile /tmp/
ADD Gemfile.lock /tmp/
RUN bundle install

# Copy the nginx template for configuration and preserve environment variables
RUN rm /etc/nginx/sites-enabled/default

# Add the nginx site and config
ADD rails-server.conf /etc/nginx/sites-enabled/rails-server.conf
RUN mkdir /home/app/rails-server
COPY . /home/app/rails-server
RUN usermod -u 1000 app
RUN chown -R app:app /home/app/rails-server
WORKDIR /home/app/rails-server
RUN RAILS_ENV=production && bundle exec rake assets:precompile

# Clean up APT when done.
RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
EXPOSE 8000