class SandwichesController < ApplicationController
  before_action :authenticate_user!
  
  def index
    sandwiches = Sandwich.all  
    render :json => sandwiches.to_json()
  end

  def create
    sandwich = Sandwich.create( sandwich_params )
    render json: sandwich, status: :created
  end


  private
  def sandwich_params
    params.require(:sandwich).permit([:bread, :filling, :price, :date, :time])
  end

end
