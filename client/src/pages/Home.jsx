import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css/bundle";
import ListingItem from "../components/ListingItem.jsx";
import Loader from "../components/Loader/Loader.jsx";
function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [vacantRoom, setVacantRoom] = useState([]);
  const [roomateNeeded, setRoomateNeeded] = useState([]);
  console.log(offerListings);

  SwiperCore.use([Navigation]);

  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch("/api/listing/get?offer=true&limit=6");
        const data = await res.json();
        setOfferListings(data);
        fetchRoomateNeededListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchRoomateNeededListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=roomate_needed&limit=6");
        const data = await res.json();
        setRoomateNeeded(data);
        fetchVacantRoomListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchVacantRoomListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=vacant_room&limit=6");
        const data = await res.json();
        setVacantRoom(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchOfferListings();
  }, []);

  if (offerListings.length === 0) {
    return <Loader />;
  }

  return (
    <div>
      <div>
        <Swiper navigation>
          {offerListings &&
            offerListings.length > 0 &&
            offerListings.map((listing) => (
              <SwiperSlide key={listing._id}>
                <div
                  style={{
                    background: `url(${listing.imageUrls[0]}) center no-repeat`,
                    backgroundSize: "cover",
                  }}
                  className="relative h-[500px]"
                >
                  {/* Overlay Text */}
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-35 text-white p-4">
                    <h1 className="text-3xl lg:text-6xl font-bold mb-4">
                      Share Your Space
                      <br />
                      <span className="text-slate-300">
                        Find Your Room Partner
                      </span>
                    </h1>

                    <Link
                      to={"/search"}
                      className="text-xs sm:text-sm text-blue-200 font-bold hover:underline"
                    >
                      Lets get start now...
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>

      {/* <div className="flex flex-col gap-6 py-28 px-3 max-w-6xl mx-auto">
        <h1 className="text-slate-700 font-bold text-3xl lg: text-6xl ">
          Share Your Space
          <br />
          <span className="text-slate-500">Find Your Room Partner</span>
        </h1>

        <div className="text-gray-400 text-xl sm:text-sm">
          Whether you have an extra room to rent or need a room partner to share
          your space, we have got you covered.
          <br />
          Join us and make finding the perfect living arrangement easy and
          hassle-free!
        </div>

        <Link
          to={"/search"}
          className="text-xs sm:text-sm text-blue-800 font-bold hover:underline"
        >
          Lets get start now...
        </Link>
      </div> */}
      {/* <div>
        <Swiper navigation>
          {offerListings &&
            offerListings.length > 0 &&
            offerListings.map((listing) => (
              <SwiperSlide key={listing._id}>
                <div
                  style={{
                    background: `url(${listing.imageUrls[0]}) center no-repeat`,
                    backgroundSize: "cover",
                  }}
                  className="h-[500px]"
                ></div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div> */}
      <div className=" mx-auto p-3 flex flex-col gap-8 my-10">
        {offerListings && offerListings.length > 0 && (
          <div className="max-w-6xl mx-auto">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">
                Recent offers!
              </h2>
              <Link
                className="text-sm text-blue-800 hover:underline"
                to={"/search?offer=true"}
              >
                Show more offers...
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}

        <div className="w-full">
          <Swiper navigation>
            {offerListings &&
              offerListings.length > 0 &&
              offerListings.map((listing) => (
                <SwiperSlide key={listing._id}>
                  <div
                    style={{
                      background: `url(${listing.imageUrls[0]}) center no-repeat`,
                      backgroundSize: "cover",
                    }}
                    className="h-[500px]"
                  ></div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>

        {roomateNeeded && roomateNeeded.length > 0 && (
          <div className="max-w-6xl mx-auto">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">
                Recent Roomate Needed Listings!
              </h2>
              <Link
                className="text-sm text-blue-800 hover:underline"
                to={"/search?type=roomate_needed"}
              >
                Show more...
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {roomateNeeded.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {vacantRoom && vacantRoom.length > 0 && (
          <div className="max-w-6xl mx-auto">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">
                Recent Vacant Room Listing
              </h2>
              <Link
                className="text-sm text-blue-800 hover:underline"
                to={"/search?type=vacant_room"}
              >
                Show more...
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {vacantRoom.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
