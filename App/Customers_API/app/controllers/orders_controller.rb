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


    #   {
    #     include: {
    #       orderedsandwiches: {
    #         include: {
    #           sandwiches: {
    #           only: [:price]
    #         }
    #       }
    #     }
    #   }
    # }
  end

  def show
    order = Order.find(params[:id])
    render :json => order.as_json(
    {
      include: {
        sandwiches:{
          include:{
            only: [:breads, :fillings]
          }
        }
      }
    }
    )
  end

end