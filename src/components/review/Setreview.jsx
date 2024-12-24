import { Button, Input } from "@material-tailwind/react";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addreview } from "../../../Redux/userSlice";
import useToast from "../../hooks/useToast";
import Toast from "../Toast";

function Setreview({ setadd }) {
  const [post, setPost] = useState(null);
  const dispatch = useDispatch();
  const id = localStorage.getItem("id");
  const { toast } = useToast();
  const { show } = useSelector((state) => state.Toastval);

  const {
    handleChange,
    handleBlur,
    values,
    errors,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      image: null,
      title: "",
      review: "",
      location: "",
      date: Date(),
    },
    onSubmit: async (values) => {
      try {
        const formData = new FormData();
        formData.append("image", values.image);
        formData.append("title", values.title);
        formData.append("review", values.review),
          formData.append("location", values.location);
        formData.append("date", values.date);
        console.log(formData);

        const res = dispatch(addreview({ id, formdata: formData }));
        if (res) {
          toast({
            show: true,
            message: "review recorded ",
            type: "#5da364",
          });
          setadd(false);
        } else {
          toast({
            show: true,
            message: "review failed",
            type: "#de5269",
          });
        }
      } catch (error) {}
    },
  });
  const handleImage = (event) => {
    const file = event.target.files[0];
    console.log(file);

    if (file) {
      setFieldValue("image", file);
      setPost(URL.createObjectURL(file));
      console.log(file.name, "ddd");
    }
  };
  console.log(post, "s");

  return (
    <>
      <div className="fixed  backdrop-blur-md inset-0 bg-red  ">
        <form action=" " onSubmit={handleSubmit}>
          <div className=" absolute left-32 right-32  top-40 flex justify-around  h-[60vh] shadow-lg rounded-md  bg-white">
            <div className="float-end p-2 ">
              <Button
                className="bg-red-300"
                onClick={() => {
                  setadd(false);
                }}
              >
                {" "}
                close
              </Button>
            </div>
            <div className=" h-80 w-1/2 mt-16 ml-5">
              <Input type="file" onChange={handleImage} name="image"></Input>
              <img src={post} alt="" className="w-full h-full object-cover" />
            </div>
            <div className=" w-full h-full">
              <div className="flex flex-col h-full w-full items-center gap-y-12 justify-center">
                <div className="w-96">
                  <Input
                    label="Review title"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    name="title"
                    value={values.title}
                  ></Input>
                </div>
                <div className="w-96">
                  <Input
                    label="Your review"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    name="review"
                    value={values.review}
                  ></Input>
                </div>
                <div className=" w-96 flex flex-col gap-y-12">
                  <div className=" w-1/2">
                    <Input
                      label="location"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      name="location"
                      value={values.location}
                    ></Input>
                  </div>
                  <div className="w-1/2">
                    <Input
                      label="when yo did travel"
                      type="date"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      name="date"
                      value={values.date}
                    ></Input>
                  </div>
                  <Button type="submit">Submit</Button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      {show && <Toast />}
    </>
  );
}

export default Setreview;
