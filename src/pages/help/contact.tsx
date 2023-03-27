import react from "react";
import { useState } from "react";

import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';


export default function contact(num : number) {

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [order, setOrder] = useState("");
  const [user, setUser] = useState("");
  const [topic, setTopic] = useState(num);

  const topicTable : {[key : number]: string} = {
    1 : "Question about order",
    2 : "Delivery",
    3 : "Earning",
    4 : "Account",
    5 : "Memberships and Gifts",
    6 : "Request products",
  }

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
          onChange={(e) => {setTopic(Number(e.target.value))}}
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
    <div className="grid grid-cols-2 gap-40 ml-32 mr-32 mt-20 mb-32 p-10 
    border rounded-3xl">
      <TextField label="Email"
        variant="standard" required onChange={(e) => setEmail(e.target.value)} />

      <TextField label="Phone number"
        variant="standard" required onChange={(e) => setPhone(e.target.value)} />

      <TextField label="Order number"
        variant="standard" onChange={(e) => setOrder(e.target.value)} />

      <TextField label="User ID" variant="standard"
        onChange={(e) => setUser(e.target.value)} />
    </div>

    {/* input question */}
    <div className="border rounded-3xl ml-32 mr-32 mt-32 mb-32 p-10">
      <div className="grid">
        <TextField multiline label="Write you question here"
          rows={20}></TextField>
      </div>
      <hr></hr>

      {/* buttons */}
      <div className="flex justify-center mt-20">
        <h4 className="text-purple-600">Support documents</h4>
      </div>

      <div className="flex flex-row flex-wrap justify-center place-content-center mt-20">
        <input type="file"></input>
        <input type="file"></input>
        <input type="file"></input>
      </div>

      <div className="flex justify-center mt-20">
        <button className="bg-black text-white px-8 py-2">Send</button>
      </div>
    </div>

    <div className="flex flex-col place-items-center space-y-6 mt-20 mb-20">
      <h2>How to contact us?</h2>

      <button className="bg-white text-black px-14 py-2 border">
        example@groops-mail.com
      </button>

      <button className="bg-black text-white px-20 py-2 border">
        111-111-111
      </button>
    </div>


  </>
}