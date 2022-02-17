import { Link } from "react-router-dom";

export default function Profile() {
    return (
        <div className="relative">
          <div className="bg-gray-200 px-2 py-2 mt-4 absolute right-28 w-32">
            <div className="flex flex-col gap-10">
              {/* <img src="" alt="ProfilBild" /> */}
              <p>Your Name</p>
              {/* <a id="Create" href="create">Skapa Tweet</a> */}
              <Link className="bg-blue-200 px-2 py rounded-md mx-auto" to="createtweet">Skapa Tweet</Link>
              <button className="bg-blue-200 px-2 py rounded-md mx-auto">Logga ut</button>
            </div>
          </div>
        </div>
    );
  }
  
  
  