# Use ruby image from Docker hub 
# Good practice to use same Ruby version as in gemfile
FROM ruby:2.7.4

# set working directory 
WORKDIR /app

# Copy Gemfile and Gemfile.lock into working directory
COPY Gemfile Gemfile.lock /app/

# Install dependencies 
RUN bundle install 

# Copy rest of application code 
COPY . .

# Add a script to be executed every time the container starts.
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]

EXPOSE 3000

CMD ["rails", "server", "-b", "0.0.0.0"]

