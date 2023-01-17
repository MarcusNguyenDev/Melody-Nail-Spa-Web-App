import { React } from "react";
import fbIcon from "../misc/facebook.svg";
import { Link } from "react-router-dom";
import { Map, Marker } from "pigeon-maps";

const Location = {
  lat: -27.589416439686605,
  lng: 152.75214695563568,
};

export default function Footer() {
  return (
    <footer className="relative bg-gray-200 pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold">Let's keep in touch!</h4>
            <h5 className="text-lg mt-0 mb-2 text-gray-700">
              Find us on Facebook, we will respond as soon as possible.
            </h5>
            <div className="mt-6 items-center justify-center align-center content-center flex">
              <Link to={""}>
                <img
                  className=""
                  src={fbIcon}
                  alt=""
                  onClick={() => {
                    window.location.href =
                      "https://www.facebook.com/melodynailsbrassall";
                  }}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="mx-6 py-10 text-center md:text-left">
          <div className="grid grid-1 md:grid-cols-2 gap-8">
            <div className="flex justify-center">
              <div className="">
                <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                  Contact
                </h6>
                <div className="flex">
                  <div className="w-5 h-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z" />
                    </svg>
                  </div>

                  <div className="ml-5 ">
                    98 Pine Mountain Rd Brassall Ipswich QLD 4305
                  </div>
                </div>

                <div className="flex my-2">
                  <div className="w-5 h-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                    </svg>
                  </div>

                  <div className="ml-5">07 3201 5914</div>
                </div>

                <div className="flex my-2">
                  <div className="w-5 h-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-phone"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                      <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                    </svg>
                  </div>
                  <div className="ml-5">0490 545 260 (Katie)</div>
                </div>
                <div className="">
                  <div className="flex text-red-600 font-bold">
                    OPENING HOUR
                  </div>
                  <div className="flex">
                    <div className="flex-col pr-3">
                      <div className="flex border-b-2">
                        <div className="flex w-[95px]">Monday</div>

                        <div className="flex">9:00am - 5:30pm</div>
                      </div>

                      <div className="flex border-b-2">
                        <div className="flex w-[95px]">Tuesday</div>

                        <div className="flex">9:00am - 5:30pm</div>
                      </div>

                      <div className="flex border-b-2">
                        <div className="flex w-[95px]">Wednesday</div>

                        <div className="flex">9:00am - 5:30pm</div>
                      </div>

                      <div className="flex border-b-2">
                        <div className="flex w-[95px]">Thursday</div>

                        <div className="flex">9:00am - 7:00pm</div>
                      </div>

                      <div className="flex border-b-2">
                        <div className="flex w-[95px]">Friday</div>

                        <div className="flex">9:00am - 5:30pm</div>
                      </div>

                      <div className="flex border-b-2">
                        <div className="flex w-[95px]">Saturday</div>

                        <div className="flex">9:00am - 4:00pm</div>
                      </div>

                      <div className="flex border-b-2">
                        <div className="flex w-[95px]">Sunday</div>

                        <div className="flex">CLOSED</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="">
                <h6 className="uppercase font-semibold flex justify-center md:justify-start">
                  Map
                </h6>
                <h6 className="mt-1 mb-4 flex justify-center">
                  Press on the marker for direction
                </h6>
                <div className="flex justify-center md:justify-start">
                  <div className="flex w-[100%] h-[200px] justify-start border-[2px] border-black">
                    <Map center={[Location.lat, Location.lng]}>
                      <Marker
                        width={50}
                        anchor={[Location.lat, Location.lng]}
                        setCenterZoom={12}
                        color={"red"}
                        onClick={() => {
                          window.location.href =
                            "https://www.google.com/maps/place/Melody+nails/@-27.589456,152.7522139,18.75z/data=!4m5!3m4!1s0x0:0xbd8a933c32a5c572!8m2!3d-27.5894527!4d152.7521565";
                        }}
                      />
                    </Map>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-400" />
        <div className="flexr justify-center">
          <p className="text-sm text-gray-600 font-semibold mb-10 py-1">
            Copyright © {new Date().getFullYear()} Melody Nail-Spa.
          </p>
        </div>
      </div>
    </footer>
  );
}
