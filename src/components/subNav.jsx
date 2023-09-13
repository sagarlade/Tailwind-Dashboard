import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const SubNavbar = () => {
  return (
    <div>
      <div className="px-2">
        <div className="flex flex-wrap justify-between items-center w-full">
          <div className="mb-2">
            <input
              type="text"
              name="price"
              id="price"
              className="w-full  h-[2.5rem] rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="MRNo"
            />
          </div>
          <div className="mb-2 lg:-ml-[3rem]">
            <input
              type="text"
              name="price"
              id="price"
              className="w-full  h-[2.5rem] rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Name"
            />
          </div>
          <div className="flex mb-2">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                  All
                  <ChevronDownIcon
                    className="-mr-1 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Account settings
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Support
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          License
                        </a>
                      )}
                    </Menu.Item>
                    <form method="POST" action="#">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            type="submit"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block w-full px-4 py-2 text-left text-sm"
                            )}
                          >
                            Sign out
                          </button>
                        )}
                      </Menu.Item>
                    </form>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            <div className="mb-2 mr-2 ml-4 bg-white px-3 py-2 rounded-md text-sm font-semibold">
              <button>Go</button>
            </div>
            <div className="mb-2 mr-2 ml-4 bg-white px-3 py-2 rounded-md text-sm font-semibold">
              <button>Cancel</button>
            </div>
          </div>
          <div className="flex justify-evenly mb-2 lg:ml-[6rem] gap-3">
            <div className="mb-2 border-black border-solid border px-6 py-2 rounded-md text-sm font-semibold">
              <button>TT</button>
            </div>
            <div className="mb-2 border-black border-solid border px-6 py-2 rounded-md text-sm font-semibold">
              <button>WKR</button>
            </div>
            <div className="flex lg:ml-[6rem] gap-3">
              <div className="mb-2 px-1 py-2 text-sm font-semibold">
                Show
              </div>
              <div className="mb-2 bg-white border-solid border px-6 py-2 rounded-md text-sm font-semibold">
                <button>100</button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap sm:flex justify-between w-full mt-6">
          <div className="sm:flex mb-2 mr-2 bg-[#fea1a1] px-3 py-2 rounded-md text-[0.8rem] font-medium">
            <button>General</button>
          </div>
          <div className="sm:flex mb-2 mr-2 ml-4 bg-[#fbd981] px-3 py-2 rounded-md text-[0.8rem] font-medium">
            <button>corporate</button>
          </div>
          <div className="sm:flex mb-2 mr-2 ml-4 bg-[#70a3f3] px-3 py-2 rounded-md text-[0.8rem] font-medium">
            <button>Ayushman Bharat</button>
          </div>
          <div className="sm:flex mb-2 mr-2 ml-4 bg-white px-4 py-2 rounded-md text-[0.8rem] font-medium">
            <p>No.of Checkin 0</p>{" "}
          </div>
          <div className="sm:flex mb-2 mr-2 ml-4 bg-white px-4 py-2 rounded-md text-[0.8rem] font-medium">
            <p>No.of Checkout 0</p>{" "}
          </div>
          <div className="sm:flex mb-2 mr-2 ml-4 bg-white px-4 py-2 rounded-md text-[0.8rem] font-medium">
            <p>Remainig patient 0</p>{" "}
          </div>
          <div className="sm:flex mb-2 mr-2 ml-4 bg-white px-4 py-2 rounded-md text-[0.8rem] font-medium">
            <p>Cross Opinions</p>{" "}
          </div>
          <div className="sm:flex mb-2 mr-2 ml-4 bg-white px-4 py-2 rounded-md text-[0.8rem] font-medium">
            <p>Discount/Refund 0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubNavbar;
