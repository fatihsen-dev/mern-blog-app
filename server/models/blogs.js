import mongoose from "mongoose";

const blogschema = mongoose.Schema({
   title: {
      type: String,
      required: true,
   },
   img: {
      type: String,
      required: true,
   },
   text: {
      type: String,
      required: true,
   },
   desc: {
      type: String,
      required: true,
   },
   tags: {
      type: [{ tagName: String, tagColor: String }],
      required: true,
   },
   owner: {
      type: String,
      required: true,
   },
   createdDate: { type: Date, default: Date.now },
});

export default mongoose.model("Blog", blogschema);
