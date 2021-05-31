class Api::V1::BidsController < Api::ApplicationController

  before_action :find_auction,only:[:create,:destroy]
  before_action :authenticate_user!, only: [ :create, :destroy ]

  def create
    bid = Bid.new bid_params
    bid.auction = auction
    bid.user = current_user    

    bid.save!
    render json: {id: auction.id }
  end

  private
  def find_auction
    @auction=Auction.find params[:auction_id]
  end
  def bid_params
    params.require(:bid).permit(:price)
  end
end
