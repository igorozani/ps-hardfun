class TableController < ApplicationController
  def index
    @elements = File.read("db/data.json")
    @colorMap = {
      "noble gas": "#9900cc",
      "alkaline earth metal": "#cccc00",
      "diatomic nonmetal": "#006600",
      "polyatomic nonmetal":"#33CC33",
      "alkali metal": "#b36b00",
      "transition metal": "#cc0000",
      "post-transition metal": "#0066cc",
      "lanthanide": "#660033",
      "metalloid": "#009999",
      "actinide":"#33ccff",
      "unknown":""
    }
  end
  def show
    file = File.read("db/data.json")
    elements = JSON.parse(file)
    @element = elements[params[:id]]
    @colorMap = {
      "noble gas": "#9900cc",
      "alkaline earth metal": "#cccc00",
      "diatomic nonmetal": "#006600",
      "polyatomic nonmetal":"#33CC33",
      "alkali metal": "#b36b00",
      "transition metal": "#cc0000",
      "post-transition metal": "#0066cc",
      "lanthanide": "#660033",
      "metalloid": "#009999",
      "actinide":"#33ccff",
      "unknown":""
    }   
  end 
end
