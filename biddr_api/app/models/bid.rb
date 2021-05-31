class Bid < ApplicationRecord
  belongs_to :auction

  validates :price, presence: true
end
