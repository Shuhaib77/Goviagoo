import React from "react";
import Card3 from "../cards/Card3";

// import images from "../../assets/images/image.jpg";
function Stay() {
  return (
    <>
      <div>
        <div className="text-center mt-16">
          <h1 className="font-bold text-2xl ">Bdget friendly Acommadations</h1>
        </div>
        <div className="grid grid-flow-col overflow-x-scroll gap-x-5 w-100% ml-16 mr-16 mt-16 mb-20 ">
          <div className="w-[300px] h-full border rounded-md   ">
            <img
              src="/assets/images/image.jpg"
              alt=""
              className="object-cover w-full h-[150px] rounded-md"
            />
            <div className="font-bold text-md m-2">
              <h1>Thaj Hotel</h1>
              <h1>Mumbai</h1>
            </div>
            <h1 className="font-bold text-red-400 text-sm m-2">$4000/day</h1>
            <h1 className="m-2">
              Rating:
              <i
                class="fa-solid fa-star fa-lg"
                style={{ color: "#f5ec00" }}
              ></i>{" "}
              <i
                class="fa-solid fa-star fa-lg"
                style={{ color: "#f5ec00" }}
              ></i>{" "}
              <i
                class="fa-solid fa-star fa-lg"
                style={{ color: "#f5ec00" }}
              ></i>{" "}
              <i
                class="fa-solid fa-star fa-lg"
                style={{ color: "#f5ec00" }}
              ></i>{" "}
            </h1>
          </div>
          <div className="w-[300px] h-full border rounded-md   ">
            <img
              src="/assets/images/image.jpg"
              alt=""
              className="object-cover w-full h-[150px] rounded-md"
            />
            <div className="font-bold text-md m-2">
              <h1>Thaj Hotel</h1>
              <h1>Mumbai</h1>
            </div>
            <h1 className="font-bold text-red-400 text-sm m-2">$4000/day</h1>
            <h1 className="m-2">
              Rating:
              <i
                class="fa-solid fa-star fa-lg"
                style={{ color: "#f5ec00" }}
              ></i>{" "}
              <i
                class="fa-solid fa-star fa-lg"
                style={{ color: "#f5ec00" }}
              ></i>{" "}
              <i
                class="fa-solid fa-star fa-lg"
                style={{ color: "#f5ec00" }}
              ></i>{" "}
              <i
                class="fa-solid fa-star fa-lg"
                style={{ color: "#f5ec00" }}
              ></i>{" "}
            </h1>
          </div>
          <div className="w-[300px] h-full border rounded-md   ">
            <img
              src="/assets/images/image.jpg"
              alt=""
              className="object-cover w-full h-[150px] rounded-md"
            />
            <div className="font-bold text-md m-2">
              <h1>Thaj Hotel</h1>
              <h1>Mumbai</h1>
            </div>
            <h1 className="font-bold text-red-400 text-sm m-2">$4000/day</h1>
            <h1 className="m-2">
              Rating:
              <i
                class="fa-solid fa-star fa-lg"
                style={{ color: "#f5ec00" }}
              ></i>{" "}
              <i
                class="fa-solid fa-star fa-lg"
                style={{ color: "#f5ec00" }}
              ></i>{" "}
              <i
                class="fa-solid fa-star fa-lg"
                style={{ color: "#f5ec00" }}
              ></i>{" "}
              <i
                class="fa-solid fa-star fa-lg"
                style={{ color: "#f5ec00" }}
              ></i>{" "}
            </h1>
          </div>
          <div className="w-[300px] h-full border rounded-md   ">
            <img
              src="/assets/images/image.jpg"
              alt=""
              className="object-cover w-full h-[150px] rounded-md"
            />
            <div className="font-bold text-md m-2">
              <h1>Thaj Hotel</h1>
              <h1>Mumbai</h1>
            </div>
            <h1 className="font-bold text-red-400 text-sm m-2">$4000/day</h1>
            <h1 className="m-2">
              Rating:
              <i
                class="fa-solid fa-star fa-lg"
                style={{ color: "#f5ec00" }}
              ></i>{" "}
              <i
                class="fa-solid fa-star fa-lg"
                style={{ color: "#f5ec00" }}
              ></i>{" "}
              <i
                class="fa-solid fa-star fa-lg"
                style={{ color: "#f5ec00" }}
              ></i>{" "}
              <i
                class="fa-solid fa-star fa-lg"
                style={{ color: "#f5ec00" }}
              ></i>{" "}
            </h1>
          </div>
        </div>

        <Card3 />
      </div>
    </>
  );
}

export default Stay;
