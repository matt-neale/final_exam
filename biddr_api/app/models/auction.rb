class Auction < ApplicationRecord

  has_many :bids, dependent: :destroy

  belongs_to :user, optional: true

  validates :title, presence: true
  validates :body, presence: true
  
end
