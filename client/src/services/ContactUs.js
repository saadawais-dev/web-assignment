import React from "react";
import http from "./httpService";
import { apiUrl } from "../config.json";
const apiEndPoint = apiUrl + "/contactus";
export function postContactus(obj) {
  return http.post(apiEndPoint, obj);
}
