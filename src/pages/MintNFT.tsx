import { useState, ChangeEvent, useEffect, useMemo } from "react";
import "react-toastify/dist/ReactToastify.css";
import { MintModal } from "../componensts/modals/MintModal";
interface DataObject {
  trait_type: string;
  value: string;
}
function mintingpage() {
  const initialData: DataObject[] = [];

  const [isImageSelected, setIsImageSelected] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const [data, setData] = useState<DataObject[]>(initialData);
  const [newObject, setNewObject] = useState<DataObject>({
    trait_type: "",
    value: "",
  });
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const addObject = () => {
    if (editIndex !== null) {
      setData((prevData) => {
        const newData = [...prevData];
        newData[editIndex] = newObject;
        return newData;
      });
      setEditIndex(null);
    } else {
      setData([...data, newObject]);
    }
    setNewObject({ trait_type: "", value: "" });
  };

  const editObject = (index: number) => {
    const obj = data[index];
    if (obj) {
      setNewObject(obj);
      setEditIndex(index);
    }
  };

  const removeObject = (index: number) => {
    setData((prevData) => prevData.filter((_, i) => i !== index));
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewObject((prevObject) => ({ ...prevObject, [name]: value }));
  };

  //showing user Selected Image
  const [selectedImage, setSelectedImage] = useState<File | null>(); // To store the selected image URL
  //IMAGE nft name
  const [getNftDetails, setNftDetails] = useState({
    NftName: "",
    Description: "",
  });
  const imageUrl = useMemo(() => {
    if (selectedImage) {
      return URL.createObjectURL(selectedImage);
    }
    return "";
  }, [selectedImage]);
  // // Function to handle removing the selected image
  const handleRemoveImage = () => {
    setSelectedImage(null);
    setIsImageSelected(false);
  };
  const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const file = e.target.files && e.target.files[0];

    if (file) {
      setSelectedImage(file);
      setIsImageSelected(true);
    } else {
      setSelectedImage(null);
      setIsImageSelected(false);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    setNftDetails({
      ...getNftDetails,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    // Check if both fields are filled
    setIsFormValid(
      getNftDetails.NftName.trim() !== "" &&
        getNftDetails.Description.trim() !== "" &&
        isImageSelected
    );
  }, [getNftDetails, isImageSelected]);

  return (
    <main className=" mt-16 flex scroll-m-0 flex-row items-center justify-center">
      <div>
        {selectedImage && (
          <div
            style={{ height: "300px", width: "500px" }}
            className="flex flex-col items-center justify-center border-2 border-solid border-red-400 m-5"
          >
            <img
              src={imageUrl} // Use the memoized imageUrl here
              alt="Selected"
              className="selected-image border-dotted" // Add the class for the border here
              style={{ maxWidth: "500px", maxHeight: "250px" }}
            />
            <button
              className="rounded-full bg-red-500 px-4 py-2 font-bold text-white hover:bg-blue-700 mt-3"
              onClick={handleRemoveImage}
            >
              Delete
            </button>
          </div>
        )}
      </div>
      <div>
        {!selectedImage && (
          <div
            style={{ height: "300px", width: "500px" }}
            className="flex flex-col justify-center border-2 border-dashed border-black font-extrabold"
          >
            <div className="flex flex-col items-center justify-center">
              <p className="p-6">Upload Images or GIFs</p>
              <div className="relative">
                <label className="cursor-pointer rounded-lg bg-blue-500 px-4 py-2 text-white">
                  <input
                    type="file"
                    id="myfile"
                    name="myfile"
                    className="hidden"
                    onChange={handleFileInputChange}
                  />
                  Select File
                </label>
              </div>
            </div>
          </div>
        )}
      </div>
      <br></br>
      <div>
        <div className="mb-6 md:flex md:items-center">
          <div className="md:w-1/3">
            <label className="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right">
              NFT Name
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              type="text"
              onChange={handleChange}
              value={getNftDetails.NftName}
              name="NftName"
              placeholder="insert NFT name"
              className="mr-2 w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none focus:ring focus:ring-purple-500 focus:ring-opacity-50"
              required
            />
          </div>
        </div>
        <div className="mb-6 md:flex md:items-center">
          <div className="md:w-1/3">
            <label className="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right">
              NFT Description
            </label>
          </div>
          <div className="md:w-2/3">
            <textarea
              onChange={handleChange}
              value={getNftDetails.Description}
              name="Description"
              className="resize-y border rounded w-full h-32 px-4 py-2 text-gray-700 focus:outline-none focus:ring focus:border-purple-500"
              placeholder="Description"
              required
            />
          </div>
        </div>
        <div style={{ overflowY: "auto", whiteSpace: "nowrap" }}>
          {data.map((obj, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <div style={{ marginRight: "20px" }}>
                <h3>{obj.trait_type}</h3>
                <p>{obj.value}</p>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <button
                  className="rounded-lg mt-3 bg-purple-500 px-4 py-2 font-bold text-white hover:bg-blue-500 disabled:bg-slate-200"
                  onClick={() => editObject(index)}
                >
                  Edit
                </button>
                <button
                  className="rounded-lg mt-3 bg-purple-500 px-4 py-2 font-bold text-white hover:bg-red-500 disabled:bg-slate-200"
                  onClick={() => removeObject(index)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="flex flex-col">
            <div className="flex flex-row">
              <input
                type="text"
                name="trait_type"
                placeholder="Attribute"
                className="mr-2 w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none focus:ring focus:ring-purple-500 focus:ring-opacity-50"
                value={newObject.trait_type}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="value"
                placeholder="Value"
                className="mr-2 w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none focus:ring focus:ring-purple-500 focus:ring-opacity-50"
                value={newObject.value}
                onChange={handleInputChange}
              />
            </div>
            <button
              onClick={addObject}
              className="rounded-lg mt-3 mb-3 bg-purple-500 px-4 py-2 font-bold text-white hover:bg-blue-700 disabled:bg-slate-200"
            >
              {editIndex !== null ? "Update Object" : "Add Attribute"}
            </button>
          </div>
          <div className="flex justify-center items-center">
            <MintModal
              setData={setData}
              attributes={data}
              setNftDetails={setNftDetails}
              setSelectedImage={setSelectedImage}
              isFormValid={isFormValid}
              getNftDetails={getNftDetails}
              selectedImage={selectedImage}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default mintingpage;
