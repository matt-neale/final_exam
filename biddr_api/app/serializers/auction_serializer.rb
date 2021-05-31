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
end
