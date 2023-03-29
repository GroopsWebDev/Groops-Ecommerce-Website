import react from "react";
import { useState } from "react";
import { useRouter } from 'next/router';

import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';


const Icon = () => {
  return <svg className="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 35">
    <text id="_" data-name="􀌾" transform="translate(17 28)" fill="#fff" font-size="29" font-family="SF Compact">
      <tspan x="-16.114" y="0">􀌾</tspan></text>
  </svg>
}


export default function contact() {

  const router = useRouter();
  const { num } = router.query;

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [order, setOrder] = useState("");
  const [user, setUser] = useState("");
  const [group, setGroup] = useState("");
  const [topic, setTopic] = useState(
    num ? Number(num) : 1
  );


  const topicTable: { [key: number]: string } = {
    1: "Question about order",
    2: "Delivery",
    3: "Earning",
    4: "Account",
    5: "Memberships and Gifts",
    6: "Request products",
  };

  return <>
    <h1 className="text-purple-600 flex justify-center mt-20">Help Centre</h1>

    {/* topic selector */}
    <div className="flex justify-center mt-20">
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="topic">Topic</InputLabel>
        <Select className="w-60"
          labelId="topic"
          id="topic"
          value={topic}
          onChange={(e) => { setTopic(Number(e.target.value)) }}
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
    <div className="grid grid-cols-2 gap-20 ml-32 mr-32 mt-20 mb-10 p-10 
    border rounded-3xl">
      <TextField label="Email" variant="standard"
        required onChange={(e) => setEmail(e.target.value)} />

      <TextField label="Phone number" variant="standard"
        required onChange={(e) => setPhone(e.target.value)} />

      <TextField label="Order number" variant="standard"
        onChange={(e) => setOrder(e.target.value)} />

      <TextField label="User ID" variant="standard"
        onChange={(e) => setUser(e.target.value)} />

      <TextField label="Group code" variant="standard"
        onChange={(e) => setGroup(e.target.value)} />
    </div>

    {/* input question */}
    <div className="border rounded-3xl ml-32 mr-32 mt-10 mb-32 p-10">
      <div className="grid">
        <TextField multiline label="Write you question here"
          rows={10}></TextField>
      </div>
      <hr></hr>

      {/* buttons */}
      <div className="flex justify-center mt-20">
        <h4 className="text-purple-600">Support documents</h4>
      </div>

      <div className="flex flex-row flex-wrap justify-center place-content-center mt-20">
        <input type="file" multiple id="upload" className=""></input>
      </div>

      <div className="flex justify-center mt-20">
        <button className="bg-black text-white px-8 py-2">Send</button>
      </div>
    </div>

    <div className="flex flex-col place-items-center space-y-6 mt-20 mb-20">
      <h2>How to contact us?</h2>

      <button className="bg-black text-white px-2 py-2 border">
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

}
