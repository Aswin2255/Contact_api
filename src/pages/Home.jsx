import { useEffect } from "react";
import Navbar from "../components/Navbar";
import axiosinstance from "../api/axios";
import { useState } from "react";
import Table from "../components/Table";

import Loader from "../components/Loader";

function Home() {
  const [usercontact, setusercontact] = useState([]);
  const [customfieldid, setcustomfieldid] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    getcontact();
    getcustomfield();
  }, []);

  const getcontact = async () => {
    setloading(true);
    axiosinstance
      .get("/contacts")
      .then(({ data }) => {
        setloading(false);
        setusercontact([data.contacts[10]]);
      })
      .catch((er) => {
        setloading(false);
        console.log(er);
      });
  };

  const getcustomfield = async () => {
    axiosinstance
      .get("/custom-fields")
      .then(({ data }) => {
        console.log(data);
        const filteredcustomfield = data.customFields.filter((e) => {
          if (e.name === "DFS Booking Zoom Link") {
            return e;
          }
        });
        setcustomfieldid(filteredcustomfield[0]);
      })
      .catch((er) => {
        console.log(er);
      });
  };

  const updatefield = async () => {
    setloading(true);
    const id = customfieldid.id;
    const updated = { ...usercontact[0] };
    updated.customField = { [id]: "TEST" };
    console.log(updated);
    axiosinstance
      .put(`/contacts/${updated.id}`, updated)
      .then(({ data }) => {
        console.log(data);
        setloading(false);
        alert("updated succesfully");
        setusercontact([data.contact]);
      })
      .catch((er) => {
        setloading(false);
        alert("error ocured");
      });
  };

  return (
    <div>
      <Navbar />

      {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <Table userdata={usercontact} />
          <div className="flex items-center justify-center m-5">
            <button
              onClick={updatefield}
              class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            >
              Update customField
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
