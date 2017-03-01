class OrdersController < ApplicationController

  def index
    orders = Order.all
    render :json => orders.as_json(
    {
      include: {
        orderedsandwiches: {
          include: {
            sandwich:{ 
              include: {
                bread:{
                  only: [:name]
                  },
                  fillingchoices: {
                    include: {
                      filling: {
                        only: [:filling]
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      )
  end

  def show
    order = Order.find(params[:id])
    render :json => order.as_json(
    {
          include: {
            orderedsandwiches: {
              include: {
                sandwich:{ 
                  include: {
                    bread:{
                      only: [:name]
                      },
                      fillingchoices: {
                        include: {
                          filling: {
                            only: [:filling]
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          )
  end

  def create
    order = Order.create(order_params)
    bread = Bread.create( order_params)
    sandwich = Sandwich.create( order_params)
    filling = Filling.create( order_params)
    render :json => order
  end

  private
  def order_params
    params.require(:order).permit(:date) #create new :sandwich?
    params.require(:bread).permit(:date, :name)
    params.require(:sandwich).permit(:price, :quantity)
    params.require(:filling).permit(:filling)
  end

end