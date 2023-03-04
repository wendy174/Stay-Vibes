require 'faker'


puts "Seeding data..."
Faker::Config.locale = :en
# listings 
Listing.destroy_all
User.destroy_all
Host.destroy_all
Review.destroy_all


5.times do 
    Host.create!(
        name: Faker::Name.name
    )
end



Listing.create!( 
    description: "This peaceful cottage has enough room for the whole family and is only three minutes from Marginal Way! Despite being so close to town, you’ll find yourself nestled away against a classic Maine woodland for plenty of comfort and privacy. Gather in the open full kitchen to cook a wonderful meal, or enjoy your favorite novel and some vitamin D in the sunroom. The kids will find all the yard space and nature they’ll need to have all the adventure they can stand.", 
    price: Faker::Number.between(from: 0, to: 500), 
    city: Faker::Address.city, 
    state: Faker::Address.state, 
    num_bedrooms: Faker::Number.between(from: 0, to: 10),
    num_bathrooms: Faker::Number.between(from: 0, to: 5), 
    image: "https://a0.muscache.com/im/pictures/miso/Hosting-688467833380191508/original/669cb91d-c008-47fd-bc3b-4d8338f0265c.jpeg?im_w=960", 
    host_id: Host.all().sample().id 
    )


Listing.create(
    description: "Honeycrisp Cottage a Tiny Timber Frame is a bright, energy-efficient dwelling nestled on 9 acres overlooking a beautiful forested mountain & trails to explore along a brook. A peaceful getaway retreat equipped with a living room, a king bed, a loft with a queen bed, a full kitchen, & a full bathroom.", 
    price: Faker::Number.between(from: 0, to: 500), 
    city: Faker::Address.city, 
    state: Faker::Address.state, 
    num_bedrooms: Faker::Number.between(from: 0, to: 10),
    num_bathrooms: Faker::Number.between(from: 0, to: 5), 
    image: "https://a0.muscache.com/im/pictures/cc2be89b-da4f-4ada-90e7-84e092d11a44.jpg?im_w=720", 
    host_id: Host.all().sample().id
    ) 

Listing.create(
    description: "Honeycrisp Cottage a Tiny Timber Frame is a bright, energy-efficient dwelling nestled on 9 acres overlooking a beautiful forested mountain & trails to explore along a brook. A peaceful getaway retreat equipped with a living room, a king bed, a loft with a queen bed, a full kitchen, & a full bathroom.", 
    price: Faker::Number.between(from: 0, to: 500), 
    city: Faker::Address.city, 
    state: Faker::Address.state, 
    num_bedrooms: Faker::Number.between(from: 0, to: 10),
    num_bathrooms: Faker::Number.between(from: 0, to: 5), 
    image: "https://a0.muscache.com/im/pictures/cc2be89b-da4f-4ada-90e7-84e092d11a44.jpg?im_w=720", 
    host_id: Host.all().sample().id ) 

Listing.create(
    description: "The Glen House at Sunday River is the ultimate year-round luxury estate home, spa, and entertainment destination wrapped into one magnificent vacation rental estate. It's privately nestled into the most picturesque spot on the Sunday River Golf Course in the Mahoosuc Mountains of Maine. It's ideal for extended family vacations, reunions, special occasions, holidays, and retreats.", 
    price: Faker::Number.between(from: 0, to: 500), 
    city: Faker::Address.city, 
    state: Faker::Address.state, 
    num_bedrooms: Faker::Number.between(from: 0, to: 10),
    num_bathrooms: Faker::Number.between(from: 0, to: 5), 
    image: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-38883929/original/c817c05d-b2e6-48ff-a699-d85a5bc61a55.jpeg?im_w=720", 
    host_id: Host.all().sample().id ) 

Listing.create(
    description: "Enjoy the pure waters of the Adirondacks at this private lakefront home. The house sits on one acre of private land and is only one of the few properties with a private large yard, walk-in sandy beach, and a six-person outdoor hot tub! It is a perfect year-round vacation spot.", 
    price: Faker::Number.between(from: 0, to: 500), 
    city: Faker::Address.city, 
    state: Faker::Address.state, 
    num_bedrooms: Faker::Number.between(from: 0, to: 10),
    num_bathrooms: Faker::Number.between(from: 0, to: 5), 
    image: "https://a0.muscache.com/im/pictures/miso/Hosting-39945855/original/5cc2979f-6380-4f45-87c8-667a344c63a1.jpeg?im_w=720", 
    host_id: Host.all().sample().id ) 

Listing.create(
    description: "Enjoy the pure waters of the Adirondacks at this private lakefront home. The house sits on one acre of private land and is only one of the few properties with a private large yard, walk-in sandy beach, and a six-person outdoor hot tub! It is a perfect year-round vacation spot.", 
    price: Faker::Number.between(from: 0, to: 500), 
    city: Faker::Address.city, 
    state: Faker::Address.state, 
    num_bedrooms: Faker::Number.between(from: 0, to: 10),
    num_bathrooms: Faker::Number.between(from: 0, to: 5), 
    image: "https://a0.muscache.com/im/pictures/miso/Hosting-39945855/original/5cc2979f-6380-4f45-87c8-667a344c63a1.jpeg?im_w=720", 
    host_id: Host.all().sample().id ) 


Listing.create(
    description: "Unique experience, secluded.
    Enjoy a weekend or a few days eco-friendly retreat in an architectural, geometric masterpiece on 30 preserved acres just minutes from all that Rhinebeck and the Hudson Valley have to offer.
    The house is an open plan, and though it has zero bedrooms, it can sleep 3!", 
    price: Faker::Number.between(from: 0, to: 500), 
    city: Faker::Address.city, 
    state: Faker::Address.state, 
    num_bedrooms: Faker::Number.between(from: 0, to: 10),
    num_bathrooms: Faker::Number.between(from: 0, to: 5), 
    image: "https://a0.muscache.com/im/pictures/miso/Hosting-21409981/original/a8fa243d-dac8-4238-93e5-f7aa33072ff8.jpeg?im_w=720", 
    host_id: Host.all().sample().id ) 

Listing.create(
    description: "Architectural masterpiece (b. 1961) w/ spectacular views and privacy. A soaring ceiling and a wall of glass overlooking the dunes, the ocean and the bay. Beneath, the enormous master suite looks out to the dunes on one side and the pool deck on the other. Across the pool deck are 2 guest cabana bedrooms and a bathroom. Cooling ocean breezes flow day and night in this sophisticated, relaxed compound. Multiple work areas in the home.", 
    price: Faker::Number.between(from: 0, to: 500), 
    city: Faker::Address.city, 
    state: Faker::Address.state, 
    num_bedrooms: Faker::Number.between(from: 0, to: 10),
    num_bathrooms: Faker::Number.between(from: 0, to: 5), 
    image: "https://a0.muscache.com/im/pictures/miso/Hosting-39441496/original/d990acce-13ea-4de9-9f2d-6627b04a5601.jpeg?im_w=720", 
    host_id: Host.all().sample().id ) 



# users 
5.times do 
    User.create(
        name: Faker::Name.name, 
        user_name: Faker::Internet.unique.username, 
        email: Faker::Internet.unique.email, 
        password_digest: Faker::Internet.unique.password
    )
    end 

# reviews 
10.times do 
    Review.create(
        comment: Faker::Quote.yoda, 
        user_id: User.all().sample().id , 
        listing_id:  Listing.all().sample().id
    )
    end 




puts 'Done seeding data'
