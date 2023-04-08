import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { getRemainingTime } from "../../utils/utils";

import HelpCenter from "../../components/help/help-center";
import { table } from "console";