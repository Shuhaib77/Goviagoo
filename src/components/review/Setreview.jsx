import { Button, Input } from "@material-tailwind/react";
import { useFormik } from "formik";
import React, { useState } from "react";

function Setreview({ setadd }) {
  const [post, setPost] = useState(null);

  const {
    handlechange,
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
      date: "",
    },
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append("image", values.image);
      formData.append("title", values.title);
      formData.append("review", values.review),
      formData.append("location", values.location);
      formData.append("date", values.date);
    },
  });
  const handleImage = (event) => {
    const file = event.target.files[0];
    console.log(file);

    if (file) {
      setPost(URL.createObjectURL(file));
      setFieldValue("image", file);
      console.log(file.name, "ddd");
    }
  };
  console.log(post, "s");

  return (
    <>
      <div className="fixed  backdrop-blur-md inset-0 bg-red  ">
        <form action=" ">
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
                    onChange={handlechange}
                    name="title"
                    value={values.title}
                  ></Input>
                </div>
                <div className="w-96">
                  <Input
                    label="Your review"
                    onBlur={handleBlur}
                    onChange={handlechange}
                    name="review"
                    value={values.review}
                  ></Input>
                </div>
                <div className=" w-96 flex flex-col gap-y-12">
                  <div className=" w-1/2">
                    <Input
                      label="location"
                      onBlur={handleBlur}
                      onChange={handlechange}
                      name="location"
                      value={values.location}
                    ></Input>
                  </div>
                  <div className="w-1/2">
                    <Input
                      label="when yo did travel"
                      type="date"
                      onBlur={handleBlur}
                      onChange={handlechange}
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
    </>
  );
}

export default Setreview;
