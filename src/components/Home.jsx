import React, { useState } from "react";

const MainText = () => {
  return (
    <div>
      {" "}
      <div className="w-5/6 mx-auto border my-4 rounded-t-md py-3 lg:px-3 ">
        <div className="flex justify-between flex-wrap items-center relative mx-9 sm:flex gap-y-3">
          <div className="text-[1rem] font-medium border rounded-md px-8 py-2 bg-[#ca3a31] text-white lg:-mb-[0.8rem]">
            <button>12</button>
          </div>
          <div className="text-[1rem] font-medium border rounded-md px-8 py-2 bg-[#2a4dd0] text-white lg:-mb-[0.8rem]">
            <button>09</button>
          </div>
          <div className="text-[1rem] font-medium border rounded-md px-8 py-2 bg-[#ea7987] text-white lg:-mb-[0.8rem]">
            <button>12</button>
          </div>
          <div className="text-[1rem] font-medium border rounded-md px-8 py-2 bg-[#77db89] text-white lg:-mb-[0.8rem]">
            <button>24</button>
          </div>
          <div className="text-[1rem] font-medium border rounded-md px-8 py-2 bg-[#f0c732] text-white lg:-mb-[0.8rem]">
            <button>18</button>
          </div>
          <div className="text-[1rem] font-medium border rounded-md px-8 py-2 bg-[#8c2822] text-white lg:-mb-[0.8rem]">
            <button>23</button>
          </div>
        </div>
      </div>
      <div className="flex flex-col  overflow-x-auto">
        <div className="sm:-mx-6">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-5">
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-[0.85rem] font-medium">
                <thead className="border-b text-sm font-medium dark:border-neutral-500 bg-[#1c4584] text-white">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-4">
                      TSH
                    </th>
                    <th scope="col" className="px-6 py-4">
                      DEPT
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Patient Name
                    </th>
                    <th scope="col" className="px-6 py-4">
                      MRNo
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Age
                    </th>
                    <th scope="col" className="px-6 py-4">
                      DFS
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Visit
                    </th>
                    <th scope="col" className="px-6 py-4">
                      CNST
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Appt Time
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Chech-in-Time
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Dill Time
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Category
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className=" dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      <span className="rounded-full border-2 px-2 bg-blue-700 hover:border-gray-500"></span>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">109min</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <button className="px-4 py-2 rounded-md bg-[#70a3f3]">
                        COMP
                      </button>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      Mrs. Anjvaliben Vadhasiya
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">SAN-P20639</td>
                    <td className="whitespace-nowrap px-6 py-4">68/F</td>
                    <td className="whitespace-nowrap px-6 py-4">02/May/22</td>
                    <td className="whitespace-nowrap px-6 py-4">FWA</td>
                    <td className="whitespace-nowrap px-6 py-4">AS</td>
                    <td className="whitespace-nowrap px-6 py-4">10:31 AM</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <button className="px-4 py-2 rounded-md bg-[#70a3f3]">
                        10:31 AM
                      </button>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">11:31AM</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <button className="px-2 py-2 rounded-md bg-[#fea1a1]">
                        GEN
                      </button>
                    </td>
                  </tr>
                  <tr className=" dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      <span className="rounded-full border-2 px-2 bg-blue-700 hover:border-gray-500 focus:border-orange-400"></span>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">109min</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <button className="px-4 py-2 rounded-md bg-[#70a3f3]">
                        COMP
                      </button>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      Mrs. Anjvaliben Vadhasiya
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">SAN-P20639</td>
                    <td className="whitespace-nowrap px-6 py-4">68/F</td>
                    <td className="whitespace-nowrap px-6 py-4">02/May/22</td>
                    <td className="whitespace-nowrap px-6 py-4">FWA</td>
                    <td className="whitespace-nowrap px-6 py-4">AS</td>
                    <td className="whitespace-nowrap px-6 py-4">10:31 AM</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <button className="px-4 py-2 rounded-md bg-[#70a3f3]">
                        10:31 AM
                      </button>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">11:31AM</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <button className="px-2 py-2 rounded-md bg-[#f0c732]">
                        GEN
                      </button>
                    </td>
                  </tr>
                  <tr className=" dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      <span className="rounded-full border-2 px-2 bg-blue-700 hover:border-gray-500"></span>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">109min</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <button className="px-4 py-2 rounded-md bg-[#70a3f3]">
                        COMP
                      </button>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      Mrs. Anjvaliben Vadhasiya
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">SAN-P20639</td>
                    <td className="whitespace-nowrap px-6 py-4">68/F</td>
                    <td className="whitespace-nowrap px-6 py-4">02/May/22</td>
                    <td className="whitespace-nowrap px-6 py-4">FWA</td>
                    <td className="whitespace-nowrap px-6 py-4">AS</td>
                    <td className="whitespace-nowrap px-6 py-4">10:31 AM</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <button className="px-4 py-2 rounded-md bg-[#70a3f3]">
                        10:31 AM
                      </button>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">11:31AM</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <button className="px-2 py-2 rounded-md bg-[#f0c732]">
                        GEN
                      </button>
                    </td>
                  </tr>
                  <tr className=" dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      <span className="rounded-full border-2 px-2 bg-blue-700 hover:border-gray-500"></span>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">109min</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <button className="px-4 py-2 rounded-md bg-[#70a3f3]">
                        COMP
                      </button>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      Mrs. Anjvaliben Vadhasiya
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">SAN-P20639</td>
                    <td className="whitespace-nowrap px-6 py-4">68/F</td>
                    <td className="whitespace-nowrap px-6 py-4">02/May/22</td>
                    <td className="whitespace-nowrap px-6 py-4">FWA</td>
                    <td className="whitespace-nowrap px-6 py-4">AS</td>
                    <td className="whitespace-nowrap px-6 py-4">10:31 AM</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <button className="px-4 py-2 rounded-md bg-[#70a3f3]">
                        10:31 AM
                      </button>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">11:31AM</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <button className="px-2 py-2 rounded-md bg-[#f0c732]">
                        GEN
                      </button>
                    </td>
                  </tr>
                  <tr className=" dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      <span className="rounded-full border-2 px-2 bg-blue-700 hover:border-gray-500"></span>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">109min</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <button className="px-4 py-2 rounded-md bg-[#70a3f3]">
                        COMP
                      </button>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      Mrs. Anjvaliben Vadhasiya
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">SAN-P20639</td>
                    <td className="whitespace-nowrap px-6 py-4">68/F</td>
                    <td className="whitespace-nowrap px-6 py-4">02/May/22</td>
                    <td className="whitespace-nowrap px-6 py-4">FWA</td>
                    <td className="whitespace-nowrap px-6 py-4">AS</td>
                    <td className="whitespace-nowrap px-6 py-4">10:31 AM</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <button className="px-4 py-2 rounded-md bg-[#70a3f3]">
                        10:31 AM
                      </button>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">11:31AM</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <button className="px-2 py-2 rounded-md bg-[#f0c732]">
                        GEN
                      </button>
                    </td>
                  </tr>
                  <tr className=" dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      <span className="rounded-full border-2 px-2 bg-blue-700 hover:border-gray-500"></span>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">109min</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <button className="px-4 py-2 rounded-md bg-[#70a3f3]">
                        COMP
                      </button>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      Mrs. Anjvaliben Vadhasiya
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">SAN-P20639</td>
                    <td className="whitespace-nowrap px-6 py-4">68/F</td>
                    <td className="whitespace-nowrap px-6 py-4">02/May/22</td>
                    <td className="whitespace-nowrap px-6 py-4">FWA</td>
                    <td className="whitespace-nowrap px-6 py-4">AS</td>
                    <td className="whitespace-nowrap px-6 py-4">10:31 AM</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <button className="px-4 py-2 rounded-md bg-[#70a3f3]">
                        10:31 AM
                      </button>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">11:31AM</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <button className="px-2 py-2 rounded-md bg-[#fea1a1]">
                        GEN
                      </button>
                    </td>
                  </tr>
                  <tr className=" dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      <span className="rounded-full border-2 px-2 bg-blue-700 hover:border-gray-500"></span>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">109min</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <button className="px-4 py-2 rounded-md bg-[#70a3f3]">
                        COMP
                      </button>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      Mrs. Anjvaliben Vadhasiya
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">SAN-P20639</td>
                    <td className="whitespace-nowrap px-6 py-4">68/F</td>
                    <td className="whitespace-nowrap px-6 py-4">02/May/22</td>
                    <td className="whitespace-nowrap px-6 py-4">FWA</td>
                    <td className="whitespace-nowrap px-6 py-4">AS</td>
                    <td className="whitespace-nowrap px-6 py-4">10:31 AM</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <button className="px-4 py-2 rounded-md bg-[#70a3f3]">
                        10:31 AM
                      </button>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">11:31AM</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <button className="px-2 py-2 rounded-md bg-[#fea1a1]">
                        GEN
                      </button>
                    </td>
                  </tr>
                  <tr className=" dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      <span className="rounded-full border-2 px-2 bg-blue-700 hover:border-gray-500"></span>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">109min</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <button className="px-4 py-2 rounded-md bg-[#70a3f3]">
                        COMP
                      </button>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      Mrs. Anjvaliben Vadhasiya
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">SAN-P20639</td>
                    <td className="whitespace-nowrap px-6 py-4">68/F</td>
                    <td className="whitespace-nowrap px-6 py-4">02/May/22</td>
                    <td className="whitespace-nowrap px-6 py-4">FWA</td>
                    <td className="whitespace-nowrap px-6 py-4">AS</td>
                    <td className="whitespace-nowrap px-6 py-4">10:31 AM</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <button className="px-4 py-2 rounded-md bg-[#70a3f3]">
                        10:31 AM
                      </button>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">11:31AM</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <button className="px-2 py-2 rounded-md bg-[#fea1a1]">
                        GEN
                      </button>
                    </td>
                  </tr>
                  <tr className=" dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      <span className="rounded-full border-2 px-2 bg-blue-700 hover:border-gray-500"></span>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">109min</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <button className="px-4 py-2 rounded-md bg-[#70a3f3]">
                        COMP
                      </button>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      Mrs. Anjvaliben Vadhasiya
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">SAN-P20639</td>
                    <td className="whitespace-nowrap px-6 py-4">68/F</td>
                    <td className="whitespace-nowrap px-6 py-4">02/May/22</td>
                    <td className="whitespace-nowrap px-6 py-4">FWA</td>
                    <td className="whitespace-nowrap px-6 py-4">AS</td>
                    <td className="whitespace-nowrap px-6 py-4">10:31 AM</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <button className="px-4 py-2 rounded-md bg-[#70a3f3]">
                        10:31 AM
                      </button>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">11:31AM</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <button className="px-2 py-2 rounded-md bg-[#70a3f3]">
                        GEN
                      </button>
                    </td>
                  </tr>
                  <tr className=" dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      <span className="rounded-full border-2 px-2 bg-blue-700 hover:border-gray-500"></span>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">109min</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <button className="px-4 py-2 rounded-md bg-[#70a3f3]">
                        COMP
                      </button>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      Mrs. Anjvaliben Vadhasiya
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">SAN-P20639</td>
                    <td className="whitespace-nowrap px-6 py-4">68/F</td>
                    <td className="whitespace-nowrap px-6 py-4">02/May/22</td>
                    <td className="whitespace-nowrap px-6 py-4">FWA</td>
                    <td className="whitespace-nowrap px-6 py-4">AS</td>
                    <td className="whitespace-nowrap px-6 py-4">10:31 AM</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <button className="px-4 py-2 rounded-md bg-[#70a3f3]">
                        10:31 AM
                      </button>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">11:31AM</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <button className="px-2 py-2 rounded-md bg-[#70a3f3]">
                        GEN
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainText;
