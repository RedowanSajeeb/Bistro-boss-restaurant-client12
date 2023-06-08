import SectionTitle from "../../../Components/SectionTitale/SectionTitle";


const AddItms = () => {
    return (
      <div className="w-full px-20">
        <SectionTitle
          shortHading={"What's new?"}
          hading={"ADD AN ITEM"}
        ></SectionTitle>
        <form>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">Recipe name*</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="flex gap-10 mt-2">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-bold ">
                  Pick the best fantasy franchise
                </span>
              </label>
              <select className="select select-bordered font-semibold">
                <option disabled selected>
                  Category*
                </option>
                <option>Salad</option>
                <option>pizza</option>
                <option>soups</option>
                <option>desserts</option>
                <option>drinks</option>
              </select>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-semibold">Price*</span>
              </label>
              <input
                type="number"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <textarea
            placeholder="Recipe Details*"
            className="textarea textarea-bordered textarea-lg w-full mt-20 "
          ></textarea>

          <div className="form-control w-full max-w-xs mt-5">
            <label className="label">
              <span className="label-text">img file*</span>
            </label>
            <input
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </div>
          <input className="btn btn-warning mt-10" type="submit" value="Submit" />
        </form>
      </div>
    );
};

export default AddItms;