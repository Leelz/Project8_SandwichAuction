class FillingsController < ApplicationController

  def index 
    fillings = Filling.all
    render :json => fillings
  end

end