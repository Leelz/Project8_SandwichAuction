class CustomersController < ApplicationController

  def index
    customers = Customer.all
    render :json => customers.as_json(
      { include: :sandwiches }
    )
  end

  def show
    artist = Artist.find(params[:id])
    render :json => artist.as_json(
      { include: :sandwiches }
    )
  end

end