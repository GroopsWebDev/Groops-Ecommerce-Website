import react from "react";
import { useState } from "react";
import { useRouter } from "next/router";

import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import SelectFilesButton from "../../components/elements/help-center-select-files-btn";
import UploadFilesButton from "../../components/elements/help-center-send-files-btn";
import ToggleFilesButton from "../../components/elements/help-center-toggle-files-btn";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Icon = () => {
  return (
    <svg className="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 35">
      <text
        id="_"
        data-name="􀌾"
        transform="translate(17 28)"
        fill="#fff"
        font-size="29"
        font-family="SF Compact"
      >
        <tspan x="-16.114" y="0">
          􀌾
        </tspan>
      </text>
    </svg>
  );
};

const UploadButton = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100.762"
      height="91.955"
      viewBox="0 0 100.762 91.955"
    >
      <g id="Path_131" data-name="Path 131" fill="#fff">
        <path
          d="M 77.76220703125 91.20524597167969 L 22.99999618530273 91.20524597167969 C 19.99592971801758 91.20524597167969 17.08213043212891 90.6170654296875 14.3395299911499 89.45703887939453 C 11.69010353088379 88.33642578125 9.310517311096191 86.73202514648438 7.266876697540283 84.68836975097656 C 5.223223686218262 82.64472961425781 3.618823528289795 80.26514434814453 2.498210191726685 77.61571502685547 C 1.338183522224426 74.87311553955078 0.7499968409538269 71.95932006835938 0.7499968409538269 68.95524597167969 L 0.7499968409538269 22.99999618530273 C 0.7499968409538269 19.99592971801758 1.338183522224426 17.08213043212891 2.498210191726685 14.3395299911499 C 3.618823528289795 11.69010257720947 5.223223686218262 9.310516357421875 7.266876697540283 7.266876220703125 C 9.310517311096191 5.223223209381104 11.69010353088379 3.618823051452637 14.3395299911499 2.498209714889526 C 17.08213043212891 1.338183045387268 19.99592971801758 0.7499963045120239 22.99999618530273 0.7499963045120239 L 77.76220703125 0.7499963045120239 C 80.76627349853516 0.7499963045120239 83.68007659912109 1.338183045387268 86.42267608642578 2.498209714889526 C 89.07210540771484 3.618823051452637 91.45169067382812 5.223223209381104 93.49533081054688 7.266876220703125 C 95.53898620605469 9.310516357421875 97.14338684082031 11.69010257720947 98.26399993896484 14.3395299911499 C 99.42402648925781 17.08213043212891 100.01220703125 19.99592971801758 100.01220703125 22.99999618530273 L 100.01220703125 68.95524597167969 C 100.01220703125 71.95932006835938 99.42402648925781 74.87311553955078 98.26399993896484 77.61571502685547 C 97.14338684082031 80.26514434814453 95.53898620605469 82.64472961425781 93.49533081054688 84.68836975097656 C 91.45169067382812 86.73202514648438 89.07210540771484 88.33642578125 86.42267608642578 89.45703887939453 C 83.68007659912109 90.6170654296875 80.76627349853516 91.20524597167969 77.76220703125 91.20524597167969 Z"
          stroke="none"
        />
        <path
          d="M 23 1.499992370605469 C 20.09686279296875 1.499992370605469 17.28134918212891 2.0682373046875 14.63169097900391 3.188949584960938 C 12.07166290283203 4.271751403808594 9.772216796875 5.822196960449219 7.797203063964844 7.797195434570312 C 5.82220458984375 9.772209167480469 4.271759033203125 12.07166290283203 3.188957214355469 14.63168334960938 C 2.068244934082031 17.28134918212891 1.5 20.09685516357422 1.5 22.99999237060547 L 1.5 68.95525360107422 C 1.5 71.8583984375 2.068244934082031 74.67389678955078 3.188957214355469 77.32354736328125 C 4.271759033203125 79.88358306884766 5.82220458984375 82.18303680419922 7.797203063964844 84.15803527832031 C 9.772216796875 86.13303375244141 12.07166290283203 87.68347930908203 14.63169097900391 88.76628112792969 C 17.28134918212891 89.88699340820312 20.09686279296875 90.45523834228516 23 90.45523834228516 L 77.76220703125 90.45523834228516 C 80.66534423828125 90.45523834228516 83.48085784912109 89.88699340820312 86.13051605224609 88.76628112792969 C 88.69054412841797 87.68347930908203 90.989990234375 86.13303375244141 92.96500396728516 84.15803527832031 C 94.94000244140625 82.18303680419922 96.49044799804688 79.88358306884766 97.57324981689453 77.32354736328125 C 98.69396209716797 74.67389678955078 99.26220703125 71.8583984375 99.26220703125 68.95525360107422 L 99.26220703125 22.99999237060547 C 99.26220703125 20.09685516357422 98.69396209716797 17.28134918212891 97.57324981689453 14.63168334960938 C 96.49044799804688 12.07166290283203 94.94000244140625 9.772209167480469 92.96500396728516 7.797195434570312 C 90.989990234375 5.822196960449219 88.69054412841797 4.271751403808594 86.13051605224609 3.188949584960938 C 83.48085784912109 2.0682373046875 80.66534423828125 1.499992370605469 77.76220703125 1.499992370605469 L 23 1.499992370605469 M 23 -7.62939453125e-06 L 77.76220703125 -7.62939453125e-06 C 90.46475982666016 -7.62939453125e-06 100.76220703125 10.29745483398438 100.76220703125 22.99999237060547 L 100.76220703125 68.95525360107422 C 100.76220703125 81.65779113769531 90.46475982666016 91.95523834228516 77.76220703125 91.95523834228516 L 23 91.95523834228516 C 10.29744720458984 91.95523834228516 0 81.65779113769531 0 68.95525360107422 L 0 22.99999237060547 C 0 10.29745483398438 10.29744720458984 -7.62939453125e-06 23 -7.62939453125e-06 Z"
          stroke="none"
          fill="#898989"
        />
      </g>
      <text
        id="_"
        data-name="􀅼"
        transform="translate(33.881 37.978)"
        fill="#797979"
        font-size="33"
        font-family="SF Compact"
      >
        <tspan x="0" y="0">
          􀅼
        </tspan>
      </text>
      <text
        id="Add_Photos"
        data-name="Add Photos"
        transform="translate(17.881 65.747)"
        fill="#797979"
        font-size="15"
        font-family="League Spartan"
      >
        <tspan x="0" y="0">
          Add Photos
        </tspan>
      </text>
    </svg>
  );
};

export default function contact() {
  const router = useRouter();
  const { num } = router.query;

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [order, setOrder] = useState("");
  const [user, setUser] = useState("");
  const [group, setGroup] = useState("");
  const [topic, setTopic] = useState(num ? Number(num) : 1);
  const [fileList, setFileList] = useState<File[]>([]);
  const [showFiles, setShowFiles] = useState(false);

  const notify = () => toast.success("Files Sent !"); // react-toastify

  const topicTable: { [key: number]: string } = {
    1: "Question about order",
    2: "Delivery",
    3: "Earning",
    4: "Account",
    5: "Memberships and Gifts",
    6: "Request products",
  };

  const Upload = () => {
    const handle = (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if (files) {
        setFileList([...fileList, ...files]);
      }
    };

    return (
      <>
        <div className="flex flex-col place-items-center gap-3">
          <span>files selected : {fileList.length}</span>

          {fileList.length > 0 && (
            <>
              <ToggleFilesButton
                showFiles={showFiles}
                onClick={() => setShowFiles(!showFiles)}
              />
              {showFiles ? (
                <></>
              ) : (
                <>
                  {fileList.map((file, index) => {
                    return <span key={index}>{file.name}</span>;
                  })}
                </>
              )}
            </>
          )}

          <label htmlFor="upload-photo">
            <input
              style={{ display: "none" }}
              id="upload-photo"
              name="upload-photo"
              type="file"
              multiple
              onChange={handle}
            />

            <Button color="secondary" variant="contained" component="span">
              Upload button
            </Button>

            <SelectFilesButton
              onClick={() => {
                handle;
              }}
            />
          </label>
        </div>
      </>
    );
  };

  //body
  return (
    <>
      <h1 className="mt-20 flex justify-center text-purple-600">Help Centre</h1>

      {/* topic selector */}
      <div className="mt-20 flex justify-center">
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="topic">Topic</InputLabel>
          <Select
            className="w-60"
            labelId="topic"
            id="topic"
            value={topic}
            onChange={(e) => {
              setTopic(Number(e.target.value));
            }}
          >
            <MenuItem value={1}>{topicTable[1]}</MenuItem>
            <MenuItem value={2}>{topicTable[2]}</MenuItem>
            <MenuItem value={3}>{topicTable[3]}</MenuItem>
            <MenuItem value={4}>{topicTable[4]}</MenuItem>
            <MenuItem value={5}>{topicTable[5]}</MenuItem>
            <MenuItem value={6}>{topicTable[6]}</MenuItem>
          </Select>
        </FormControl>
      </div>

      {/* personal information */}
      <div
        className="ml-32 mr-32 mt-20 mb-10 grid grid-cols-2 gap-20 rounded-3xl 
    border p-10"
      >
        <TextField
          label="Email"
          variant="standard"
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          label="Phone number"
          variant="standard"
          required
          onChange={(e) => setPhone(e.target.value)}
        />

        <TextField
          label="Order number"
          variant="standard"
          onChange={(e) => setOrder(e.target.value)}
        />

        <TextField
          label="User ID"
          variant="standard"
          onChange={(e) => setUser(e.target.value)}
        />

        <TextField
          label="Group code"
          variant="standard"
          onChange={(e) => setGroup(e.target.value)}
        />
      </div>

      {/* input question */}
      <div className="ml-32 mr-32 mt-10 mb-32 rounded-3xl border p-10">
        <div className="grid">
          <TextField
            multiline
            label="Write you question here"
            rows={10}
          ></TextField>
        </div>
        <hr></hr>

        {/* buttons */}
        <div className="mt-20 flex justify-center">
          <h4 className="text-purple-600">Support documents</h4>
        </div>

        {/* file upload */}
        <Upload></Upload>

        {/* send */}
        <div className="mt-20 flex justify-center">
          {/* <button className="bg-black px-8 py-2 text-white">Send</button> */}
          <UploadFilesButton onClick={notify} />
          <ToastContainer 
          position="bottom-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"/>
        </div>
      </div>

      <div className="mt-20 mb-20 flex flex-col place-items-center space-y-6">
        <h2>How to contact us?</h2>

        <button className="border bg-black px-2 py-2 text-white">
          <div className="flex flex-row justify-center">
            <a href="mailto:mail@example.com" className="text-white">
              example@groops-mail.com
            </a>
            &nbsp;
            <Icon></Icon>
            111-111-111
          </div>
        </button>
      </div>
    </>
  );
}
