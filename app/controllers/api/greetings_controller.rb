module Api
  class GreetingsController < ApplicationController
    def index
      offset = rand(Message.count)
      puts "Message: #{@random_record}"
      @random_record = Message.offset(offset).first
    end
  end
end
