class ElementController < ApplicationController
    def index
    #   @elements = File.read("db/data.json")    
      # @elements = JSON.parse(file)
      # render json: file
    end
    def show
        file = File.read("db/data.json")
        elements = JSON.parse(file)
        @element = elements[params[:id]]
    end 
  end
  