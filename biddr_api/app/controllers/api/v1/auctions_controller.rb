class Api::V1::AuctionsController < Api::ApplicationController
  
  before_action :find_auction, only: [:show, :update, :destroy]
  before_action :authenticate_user!, only: [ :create, :destroy ]

  def index
    auctions = Auction.order(created_at: :desc)

    render(
      json: auctions,
      # To stop us from overfetching extra data from the 
      # QuestionSerializer, we can use a custom serializer.
      each_serializer: QuestionCollectionSerializer,
    )
  end

  def show
    if @auction
      render(
        json: @auction,
        include: [ :creator, { :bids } ]
      )
    else
      render(json: {error: "Auction Not Found"})
    end
  end

  def create
    auction = Auction.new auction_params
    auction.user = current_user

    auction.save!
    render json: {id: auction.id }
  end

  private

  def find_auction
    @auction = Auction.find params[:id]
  end

  def auction_params
    params.require(:auction).permit(:title, :body, :price, :end_date)
  end

end
