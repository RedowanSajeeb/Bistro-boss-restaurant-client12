import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitale/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
const img_hostingApi_Token = import.meta.env.VITE_apiKeys_imgHosting_Token;

const AddItms = () => {
  // console.log(img_hostingApi_Token);
  const [axiosSecure] = useAxiosSecure()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hostingApi_Token}&`;

  const onSubmit = (data) => {
    console.log(data);

    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgres) => {
        console.log(imgres);
        if (imgres.success) {
          const imgUrl = imgres?.data?.display_url;

          const newMenuItems = data;
         newMenuItems.price = parseFloat(newMenuItems.price);
          // const { name, category, price, recipe } = data;
          // const newMenuItems = { name, category, price, recipe, image : imgUrl };

          newMenuItems.image = imgUrl;
          console.log(newMenuItems);

          axiosSecure.post("/menu", newMenuItems)
          .then(data => {
            console.log('after posting new menu items',data.data);
            if(data.data.insertedId){
                reset()
                 Swal.fire({
                   position: "top-center",
                   icon: "success",
                   title: "New menu item inserted successfully",
                   showConfirmButton: false,
                   timer: 1500,
                 });
            }
          })


        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  console.log(errors);
  return (
    <div className="w-full px-20">
      <SectionTitle
        shortHading={"What's new?"}
        hading={"ADD AN ITEM"}
      ></SectionTitle>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-[#F3F3F3] p-10 rounded-xl"
      >
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold">Recipe name*</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
            {...register("name", { required: true, maxLength: 280 })}
          />
        </div>
        <div className="flex gap-10 mt-2">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-bold ">
                Pick the best fantasy franchise
              </span>
            </label>
            <select
              defaultValue="picked"
              {...register("category", { required: true })}
              className="select select-bordered font-semibold"
            >
              <option disabled>Category*</option>
              <option>Salad</option>
              <option>pizza</option>
              <option>soups</option>
              <option>desserts</option>
              <option>drinks</option>
              <option>deshBangla</option>
            </select>
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-semibold">Price*</span>
            </label>
            <input
              {...register("price", { required: true })}
              type="number"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>
        </div>
        <textarea
          {...register("recipe", { required: true })}
          placeholder="Recipe Details*"
          className="textarea textarea-bordered textarea-lg w-full mt-20 "
        ></textarea>

        <div className="form-control w-full mt-5  max-w-xs">
          <label className="label">
            <span className="label-text font-bold">img file*</span>
          </label>
          <input
            {...register("image", { required: true })}
            type="file"
            className="file-input file-input-bordered w-full "
          />
        </div>
        <input className="btn btn-warning mt-10" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddItms;
