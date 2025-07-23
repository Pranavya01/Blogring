import React, { useEffect, useRef, useState } from "react";
import { IoIosCloudUpload } from "react-icons/io";
import { blogCategories } from "../../assets/assets";
import Quill from "quill";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const AddBlog = () => {

  const {axios} = useAppContext();
  const [isAdding, setIsAdding] = useState(false);

  const editorRef = useRef(null);
  const quillRef = useRef(null);

  const [image, setImage] = useState(false);
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("Startup");
  const [isPublished, setIsPublished] = useState(false);

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      setIsAdding(true);

      const blog = {
        title, subTitle, author,
        description: quillRef.current.root.innerHTML,
        category, isPublished
      }

      const formData = new FormData();
      formData.append('blog', JSON.stringify(blog))
      formData.append('image', image)

      const {data} = await axios.post('/api/blog/add', formData);

      if(data.success) {
        toast.success(data.message);
        setImage(false)
        setTitle('');
        quillRef.current.root.innerHTML = ''
        setCategory('Startup')
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally{
      setIsAdding(false);
    }
  };

  useEffect(() => {
    if(!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {theme: 'snow'})
    }
  },[])

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col animate-fadeIn items-center text-slate-900 w-full px-4 md:px-10 overflow-y-auto"
    >
      <div className="bg-gradient-to-r from-blue-500 via-yellow-500 to-orange-700 w-full p-4 md:p-10 sm:m-10 shadow-xl shadow-slate-900 rounded-lg ">
        <p className="text-xl animate-slideLeft rounded-lg shadow-xl shadow-slate-900 w-3/12 py-4 mx-auto mb-7 font-bold text-slate-900 text-center">
          UPLOAD THUMBNAIL
        </p>
        <label
          htmlFor="image"
          className="mt-2 h-36 animate-rightslide rounded-lg w-2/6 mx-auto cursor-pointer flex items-center justify-center rouneded-lg shadow-xl active:scale-90 duration-200 ease-in-out transition-all shadow-slate-900 bg-slate-100"
        >
          {!image ? (
            <IoIosCloudUpload className="text-4xl text-slate-600" />
          ) : (
            <img
              src={URL.createObjectURL(image)}
              alt="thumbnail preview"
              className="h-full w-full object-cover rounded-lg"
            />
          )}
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </label>

        <p className="text-center animate-slideLeft py-4 rounded-lg mx-auto shadow-xl shadow-slate-900 w-3/12 text-xl font-bold text-slate-900 my-8">
          BLOG TITLE
        </p>
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          className="w-full h-14 animate-slideUp shadow-xl shadow-slate-900 rounded-lg p-3 placeholder:text-slate-900 font-bold border-opacity-60"
          placeholder="Enter your Blog title"
          required
        />

        <p className="text-center animate-rightslide rounded-lg shadow-xl shadow-slate-900 py-4 w-3/12 mx-auto text-xl font-bold text-slate-900 my-8">
          SUB-TITLE
        </p>
        <input
          onChange={(e) => setSubTitle(e.target.value)}
          value={subTitle}
          type="text"
          className="w-full h-14 animate-slideUp shadow-xl shadow-slate-900 rounded-lg p-3 placeholder:text-slate-900 font-bold border-opacity-60"
          placeholder="Enter your Blog title"
          required
        />

        <p className="text-center animate-rightslide rounded-lg shadow-xl shadow-slate-900 py-4 w-3/12 mx-auto text-xl font-bold text-slate-900 my-8">
          AUTHOR'S NAME
        </p>
        <input
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
          type="text"
          className="w-full h-14 animate-slideUp shadow-xl shadow-slate-900 rounded-lg p-3 placeholder:text-slate-900 font-bold border-opacity-60"
          placeholder="Enter your name"
          required
        />

        <p className="text-center animate-rightslide shadow-xl shadow-slate-900 rounded-lg w-3/12 mx-auto py-4 my-8 text-xl font-bold text-slate-900">
          BLOG DESCRIPTION
        </p>
        <div className="bg-white animate-slideUp shadow-xl shadow-slate-900 rounded-lg border border-slate-300 p-4 min-h-[200px]">
         <div ref={editorRef} className="overflow-auto outline-none">

         </div>

        </div>

        <p className="text-xl rounded-lg shadow-xl shadow-slate-900 py-4 w-3/12 mx-auto text-center my-8 animate-rightslide font-bold">BLOG CATEGORY</p>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          className="w-full animate-slideUp shadow-xl shadow-slate-900 h-12 rounded-lg p-3 text-base font-medium border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <option value="">SELECT CATEGORY</option>
          {blogCategories.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>

        <div className="flex gap-2 mt-8">
          <p className="text-xl font-bold">PUBLISH NOW</p>
          <input type="checkbox" checked={isPublished} className="scale-150 cursor-pointer"
          onChange={(e) => setIsPublished(e.target.checked)}/>
        </div>

        <button disabled={isAdding} className="rounded-full mt-9 shadow-xl shadow-slate-900 px-6 py-2 active:scale-90 duration-200 ease-in-out transition-all">
          <p className="text-xl font-bold text-slate-900">{isAdding ? 'ADDING...' : 'ADD BLOG'}</p>
        </button>

      </div>
    </form>
  );
};

export default AddBlog;
