# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Bid.destroy_all # .delete_all
Auction.destroy_all

## Diff b/w delete_all and destroy_all
# delete_all will forceably remove records from the corresponding table without activating any rails callbacks.

# destroy_all will remove the records but also call the model callbacks

NUM_AUCTION=25
PASSWORD='supersecret'

super_user= User.create(
    first_name: "Jon",
    last_name: 'Snow',
    email: 'js@winterfell.gov',
    password: PASSWORD,
)
10.times do 
    first_name= Faker:: Name.first_name
    last_name= Faker::Name.last_name
    User.create(
      first_name: first_name,
      last_name: last_name,
     
      email: "#{first_name}.#{last_name}@example.com",
      password: PASSWORD
    )
end
users=User.all

NUM_AUCTION.times do
    created_at = Faker::Date.backward(days:365 * 5)

    a=Auction.create(
        title: Faker::Hacker.say_something_smart,
        body: Faker::GreekPhilosophers.quote,
        price: rand(100),
        created_at: created_at,
        updated_at: created_at,
        user: users.sample
    )
    if a.persisted?  # we can also use .valid? to check the data that is entered in db was valid or not
        a.bids= rand(0..10).times.map do
            Bid.new(price: rand(1000),user: users.sample)
        end
    end

    
end

auctions = Auction.all
bids=Bid.all

puts Cowsay.say("Generated #{auctions.count} auctions", :sheep)
puts Cowsay.say("Generated #{bids.count} bids", :tux)
puts Cowsay.say("Generated #{users.count} users", :beavis)
puts Cowsay.say("Login with #{super_user.email} and password: #{PASSWORD}", :koala)
