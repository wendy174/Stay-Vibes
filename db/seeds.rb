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
    price: Faker::Number.between(from: 50, to: 500), 
    city: Faker::Address.city, 
    state: Faker::Address.state, 
    num_bedrooms: Faker::Number.between(from: 1, to: 10),
    num_bathrooms: Faker::Number.between(from: 1, to: 5), 
    image: "https://a0.muscache.com/im/pictures/miso/Hosting-688467833380191508/original/669cb91d-c008-47fd-bc3b-4d8338f0265c.jpeg?im_w=960", 
    host_id: Host.all().sample().id 
    )


Listing.create(
    description: "Honeycrisp Cottage a Tiny Timber Frame is a bright, energy-efficient dwelling nestled on 9 acres overlooking a beautiful forested mountain & trails to explore along a brook. A peaceful getaway retreat equipped with a living room, a king bed, a loft with a queen bed, a full kitchen, & a full bathroom.", 
    price: Faker::Number.between(from: 50, to: 500), 
    city: Faker::Address.city, 
    state: Faker::Address.state, 
    num_bedrooms: Faker::Number.between(from: 1, to: 10),
    num_bathrooms: Faker::Number.between(from: 1, to: 5), 
    image: "https://a0.muscache.com/im/pictures/cc2be89b-da4f-4ada-90e7-84e092d11a44.jpg?im_w=720", 
    host_id: Host.all().sample().id
    ) 

Listing.create(
    description: "Honeycrisp Cottage a Tiny Timber Frame is a bright, energy-efficient dwelling nestled on 9 acres overlooking a beautiful forested mountain & trails to explore along a brook. A peaceful getaway retreat equipped with a living room, a king bed, a loft with a queen bed, a full kitchen, & a full bathroom.", 
    price: Faker::Number.between(from: 50, to: 500), 
    city: Faker::Address.city, 
    state: Faker::Address.state, 
    num_bedrooms: Faker::Number.between(from: 1, to: 10),
    num_bathrooms: Faker::Number.between(from: 1, to: 5), 
    image: "https://a0.muscache.com/im/pictures/a9367a95-3575-4d3c-9923-6f65034516ed.jpg?im_w=720", 
    host_id: Host.all().sample().id ) 

Listing.create(
    description: "The Glen House at Sunday River is the ultimate year-round luxury estate home, spa, and entertainment destination wrapped into one magnificent vacation rental estate. It's privately nestled into the most picturesque spot on the Sunday River Golf Course in the Mahoosuc Mountains of Maine. It's ideal for extended family vacations, reunions, special occasions, holidays, and retreats.", 
    price: Faker::Number.between(from: 50, to: 500), 
    city: Faker::Address.city, 
    state: Faker::Address.state, 
    num_bedrooms: Faker::Number.between(from: 1, to: 10),
    num_bathrooms: Faker::Number.between(from: 1, to: 5), 
    image: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-38883929/original/c817c05d-b2e6-48ff-a699-d85a5bc61a55.jpeg?im_w=720", 
    host_id: Host.all().sample().id ) 

Listing.create(
    description: "Enjoy the pure waters of the Adirondacks at this private lakefront home. The house sits on one acre of private land and is only one of the few properties with a private large yard, walk-in sandy beach, and a six-person outdoor hot tub! It is a perfect year-round vacation spot.", 
    price: Faker::Number.between(from: 50, to: 500), 
    city: Faker::Address.city, 
    state: Faker::Address.state, 
    num_bedrooms: Faker::Number.between(from: 1, to: 10),
    num_bathrooms: Faker::Number.between(from: 1, to: 5), 
    image: "https://a0.muscache.com/im/pictures/miso/Hosting-5004250/original/ec5908f9-4361-4213-a158-09d108fec9f3.jpeg?im_w=720", 
    host_id: Host.all().sample().id ) 

Listing.create(
    description: "Enjoy the pure waters of the Adirondacks at this private lakefront home. The house sits on one acre of private land and is only one of the few properties with a private large yard, walk-in sandy beach, and a six-person outdoor hot tub! It is a perfect year-round vacation spot.", 
    price: Faker::Number.between(from: 50, to: 500), 
    city: Faker::Address.city, 
    state: Faker::Address.state, 
    num_bedrooms: Faker::Number.between(from: 1, to: 10),
    num_bathrooms: Faker::Number.between(from: 1, to: 5), 
    image: "https://a0.muscache.com/im/pictures/miso/Hosting-39945855/original/5cc2979f-6380-4f45-87c8-667a344c63a1.jpeg?im_w=720", 
    host_id: Host.all().sample().id ) 


Listing.create(
    description: "Unique experience, secluded.
    Enjoy a weekend or a few days eco-friendly retreat in an architectural, geometric masterpiece on 30 preserved acres just minutes from all that Rhinebeck and the Hudson Valley have to offer.
    The house is an open plan, and though it has zero bedrooms, it can sleep 3!", 
    price: Faker::Number.between(from: 50, to: 500), 
    city: Faker::Address.city, 
    state: Faker::Address.state, 
    num_bedrooms: Faker::Number.between(from: 1, to: 10),
    num_bathrooms: Faker::Number.between(from: 1, to: 5), 
    image: "https://a0.muscache.com/im/pictures/miso/Hosting-21409981/original/a8fa243d-dac8-4238-93e5-f7aa33072ff8.jpeg?im_w=720", 
    host_id: Host.all().sample().id ) 

Listing.create(
    description: "Architectural masterpiece (b. 1961) w/ spectacular views and privacy. A soaring ceiling and a wall of glass overlooking the dunes, the ocean and the bay. Beneath, the enormous master suite looks out to the dunes on one side and the pool deck on the other. Across the pool deck are 2 guest cabana bedrooms and a bathroom. Cooling ocean breezes flow day and night in this sophisticated, relaxed compound. Multiple work areas in the home.", 
    price: Faker::Number.between(from: 50, to: 500), 
    city: Faker::Address.city, 
    state: Faker::Address.state, 
    num_bedrooms: Faker::Number.between(from: 1, to: 10),
    num_bathrooms: Faker::Number.between(from: 1, to: 5), 
    image: "https://a0.muscache.com/im/pictures/miso/Hosting-39441496/original/d990acce-13ea-4de9-9f2d-6627b04a5601.jpeg?im_w=720", 
    host_id: Host.all().sample().id ) 

# making 8 more listings 

Listing.create(
    description: "As you drive up to Bluebird Farm you will be captivated by amazing views of the Bluebird Farm Life. This amazing Cabin in the sky has all the modern amenities you'll need to relax in the countryside, while still giving you a sense of camping. Spacious but simply designed for your comfort, the Treehouse has all the supplies you need in the kitchenette, bathroom, and shower. Great Wi-Fi for those who work from home, need to catch up on emails or seek creative spaces in-between relaxing at Bluebird Farm.", 
    price: Faker::Number.between(from: 50, to: 500), 
    city: Faker::Address.city, 
    state: Faker::Address.state, 
    num_bedrooms: Faker::Number.between(from: 1, to: 10),
    num_bathrooms: Faker::Number.between(from: 1, to: 5), 
    image: "https://a0.muscache.com/im/pictures/e7e72c42-3268-4e06-992b-bb75b6aa0a00.jpg?im_w=720", 
    host_id: Host.all().sample().id) 

Listing.create(
    description: "Nestled in the heart of the Vermont Green Mountains, the Crooked Maple Treehouse is handcrafted from timber harvested and milled on-site by the owner, Brett. Thoughtfully crafted to create a rustic and cozy retreat. Take this opportunity to escape your busy everyday life to appreciate the simplicity and solitude of living off the grid at the Crooked Maple.
    ", 
    price: Faker::Number.between(from: 50, to: 500), 
    city: Faker::Address.city, 
    state: Faker::Address.state, 
    num_bedrooms: Faker::Number.between(from: 1, to: 10),
    num_bathrooms: Faker::Number.between(from: 1, to: 5), 
    image: "https://a0.muscache.com/im/pictures/miso/Hosting-673787806464310298/original/ca8b2833-2c9c-40b5-a52d-aeaa672d1e2b.jpeg?im_w=720", 
    host_id: Host.all().sample().id) 



Listing.create(
    description: "Charming private mansion located in the beautiful Eastern Townships region, less than an hour from Montreal. Ideal for exploring the region and these many attractions; Bike, Mountain, Skiing, Vineyard, Lakes etc.
    We can connect you with any type of service: caterer, masseur...", 
    price: Faker::Number.between(from: 50, to: 500), 
    city: Faker::Address.city, 
    state: Faker::Address.state, 
    num_bedrooms: Faker::Number.between(from: 1, to: 10),
    num_bathrooms: Faker::Number.between(from: 1, to: 5), 
    image: "https://a0.muscache.com/im/pictures/miso/Hosting-52608499/original/c52e5c3c-d93f-4587-be16-a70a03f0a2c0.jpeg?im_w=720", 
    host_id: Host.all().sample().id)  


Listing.create(
    description: "In the heart of Salento, immersed in a centuries-old olive grove, the 'Masseria Quadrelli' is located just 10 km from Otranto and a few km from Santa Cesarea Terme, a well-known resort known for its spa and the beautiful sea. It is immersed in a centuries-old garden of typical Mediterranean trees and essences, such as olive trees, oleanders, strawberries, figs, bucanville, broom, which perfume the environment around the spectacular pool of irregular shape, with built-in whirlpool.", 
    price: Faker::Number.between(from: 50, to: 500), 
    city: Faker::Address.city, 
    state: Faker::Address.state, 
    num_bedrooms: Faker::Number.between(from: 1, to: 10),
    num_bathrooms: Faker::Number.between(from: 1, to: 5), 
    image: "https://a0.muscache.com/im/pictures/83738e60-4654-4faa-af1a-f53d02acbe6c.jpg?im_w=960", 
    host_id: Host.all().sample().id)  


Listing.create(
    description: "Box6 is set in its own private paddock with only nature as your neighbour. Featuring breathtaking views over the Somerset Levels and beyond, box6 really is the perfect bolthole or romantic retreat.", 
    price: Faker::Number.between(from: 50, to: 500), 
    city: Faker::Address.city, 
    state: Faker::Address.state, 
    num_bedrooms: Faker::Number.between(from: 1, to: 10),
    num_bathrooms: Faker::Number.between(from: 1, to: 5), 
    image: "https://a0.muscache.com/im/pictures/miso/Hosting-46098211/original/27cbde6b-a180-4469-b81a-03fb1794a784.jpeg?im_w=720", 
    host_id: Host.all().sample().id)  

Listing.create(
    description: "Sited just on the lake front in one of the most outstanding spots in Stresa, within a classy liberty villa featuring a lush garden and a private equipped beach, this exclusive flat enjoys a breath taking view, stylish furnishings and large spaces like a bright living area with a superb lake view terrace, 2 sofas, Tv and a big dining table, a fully equipped kitchen, 3 awesome comfy double bedrooms, 3 full bathrooms, with parquet in every rooms, free WiFi and private parking included as well.
    ", 
    price: Faker::Number.between(from: 50, to: 500), 
    city: Faker::Address.city, 
    state: Faker::Address.state, 
    num_bedrooms: Faker::Number.between(from: 1, to: 10),
    num_bathrooms: Faker::Number.between(from: 1, to: 5), 
    image: "", 
    host_id: Host.all().sample().id)  

Listing.create(
    description: "Sited just on the lake front in one of the most outstanding spots in Stresa, within a classy liberty villa featuring a lush garden and a private equipped beach, this exclusive flat enjoys a breath taking view, stylish furnishings and large spaces like a bright living area with a superb lake view terrace, 2 sofas, Tv and a big dining table, a fully equipped kitchen, 3 awesome comfy double bedrooms, 3 full bathrooms, with parquet in every rooms, free WiFi and private parking included as well.
    ", 
    price: Faker::Number.between(from: 50, to: 500), 
    city: Faker::Address.city, 
    state: Faker::Address.state, 
    num_bedrooms: Faker::Number.between(from: 1, to: 10),
    num_bathrooms: Faker::Number.between(from: 1, to: 5), 
    image: "https://a0.muscache.com/im/pictures/miso/Hosting-49220941/original/4a2734ba-221e-4885-9189-ac50706185a5.jpeg?im_w=720", 
    host_id: Host.all().sample().id)  


Listing.create(
    description: "Lounge on the alfresco day bed under climbing vines at the traditional villa built over 300 years ago. The soft shapes of the integrated furniture merge into the scenery, while materials like wood and marble contrast with the traditional white decor. Relax in the heated Jacuzzi, while the glittering of the sun reflecting in the Aegean Sea will make you day dream until night sets in.
    ", 
    price: Faker::Number.between(from: 50, to: 500), 
    city: Faker::Address.city, 
    state: Faker::Address.state, 
    num_bedrooms: Faker::Number.between(from: 1, to: 10),
    num_bathrooms: Faker::Number.between(from: 1, to: 5), 
    image: "https://a0.muscache.com/im/pictures/517f7cd5-8da8-473d-8c85-ead6aa78ef25.jpg?im_w=720", 
    host_id: Host.all().sample().id)  




    Listing.create(
        description: "Designed by renowned French architect Ludwig Godefroy (ludwiggodefroy. com) in 'Brutalist' style, the home offers unique a indoor/outdoor living experience, with gardens and the private pool integrated into the living areas.", 
        price: Faker::Number.between(from: 50, to: 500), 
        city: Faker::Address.city, 
        state: Faker::Address.state, 
        num_bedrooms: Faker::Number.between(from: 1, to: 10),
        num_bathrooms: Faker::Number.between(from: 1, to: 5), 
        image: "https://a0.muscache.com/im/pictures/miso/Hosting-52504957/original/e1a1da7e-631d-482a-b0cb-cd7a907e27a4.jpeg?im_w=1200", 
        host_id: Host.all().sample().id) 
    
    Listing.create(
        description: "ARENAL BEST ROMANTIC EXPERIENCE!!! Looking for a great spot to share with... and enjoy the best views of Arenal Volcano and Lake Arenal? Secluded area and only 40 minutes away from downtown La Fortuna, right next to the Popular Rancho Mirador Los Peñas. This is the perfect place to disconnect yourself from work and daily routine and recharge with positive vibes and amazing fresh air.", 
        price: Faker::Number.between(from: 50, to: 500), 
        city: Faker::Address.city, 
        state: Faker::Address.state, 
        num_bedrooms: Faker::Number.between(from: 1, to: 10),
        num_bathrooms: Faker::Number.between(from: 1, to: 5), 
        image: "https://a0.muscache.com/im/pictures/28b0d8ba-3b61-49b0-b0a1-86637184a1c0.jpg?im_w=720", 
        host_id: Host.all().sample().id) 





# users 
5.times do 
    User.create(
        name: Faker::Name.name, 
        user_name: Faker::Internet.unique.username, 
        email: Faker::Internet.unique.email, 
        password: Faker::Internet.unique.password
    )
    end 

# reviews 
20.times do 
    Review.create(
        comment: Faker::Quote.yoda, 
        user_id: User.all().sample().id , 
        listing_id:  Listing.all().sample().id
    )
    end 




puts 'Done seeding data'
