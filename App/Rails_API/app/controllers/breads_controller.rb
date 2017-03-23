class BreadsController < ApplicationController

  def index 
    breads = Bread.all
    render :json => breads
  end

end