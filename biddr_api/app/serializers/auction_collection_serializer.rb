class AuctionCollectionSerializer < ActiveModel::Serializer
  attributes(
    :id,
    :title,
    :body,
    :price,
    :created_at,
    :updated_at,
  )
end
