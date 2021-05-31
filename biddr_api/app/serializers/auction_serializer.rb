class AuctionSerializer < ActiveModel::Serializer
  attributes(
    :id,
    :title,
    :body,
    :price,
    :end_date,
    :created_at,
    :updated_at,
  )

  belongs_to(:user, key: :creator)

  has_many(:bids)

  class BidSerializer < ActiveModel::Serializer
    attributes :id, :price, :created_at, :updated_at

    # This will not work automatically when included nested associations
    # We will need to include it in the controller
    belongs_to(:user, key: :bidder)
  end

end
