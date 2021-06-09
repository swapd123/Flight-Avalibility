const FLIGHTS = [
  {
    id: 1,
    airline_code: "ai",
    airline: "Air India",
    number: "AI-202",
    from: "PUNE",
    to: "DELHI",
    from_code: "PNQ",
    to_code: "DEL",
    depart_date: "Mon June 14 2021 17:03:07 GMT+0530 (IST)",
    arrive_date: "Mon June 14 2021 19:03:07 GMT+0530 (IST)",
    price: 2500,
    return_trip: {
      airline: "Air India",
      number: "AI-203",
      from: "DELHI",
      to: "PUNE",
      from_code: "DEL",
      to_code: "PNQ",
      depart_date: "Tue June 15 2021 10:03:07 GMT+0530 (IST)",
      arrive_date: "Tue June 15 2021 12:03:07 GMT+0530 (IST)",
      price: 500,
    },
  },
  {
    id: 2,
    airline_code: "indigo",
    airline: "Indigo",
    number: "IND-202",
    from: "MUMBAI",
    to: "DELHI",
    from_code: "MUM",
    to_code: "DEL",
    depart_date: "Tue June 15 2021 15:03:07 GMT+0530 (IST)",
    arrive_date: "Tue June 15 2021 17:03:07 GMT+0530 (IST)",
    price: 5100,
    return_trip: {
      airline: "Indigo",
      number: "IND-203",
      from: "DELHI",
      to: "MUMBAI",
      from_code: "DEL",
      to_code: "MUM",
      depart_date: "Wed June 16 2021 09:03:07 GMT+0530 (IST)",
      arrive_date: "Wed June 16 2021 11:03:07 GMT+0530 (IST)",
      price: 1500,
    },
  },
  {
    id: 3,
    airline_code: "ai",
    airline: "Air India",
    number: "AI-204",
    from: "HYDRABAD",
    to: "DELHI",
    from_code: "PNQ",
    to_code: "DEL",
    depart_date: "Wed June 16 2021 17:03:07 GMT+0530 (IST)",
    arrive_date: "Wed June 16 2021 19:03:07 GMT+0530 (IST)",
    price: 2000,
    return_trip: {
      airline: "Air India",
      number: "AI-205",
      from: "DELHI",
      to: "HYDERABAD",
      from_code: "DEL",
      to_code: "PNQ",
      depart_date: "Thu June 17 2021 10:03:07 GMT+0530 (IST)",
      arrive_date: "Thu June 17 2021 12:03:07 GMT+0530 (IST)",
      price: 500,
    },
  },
  {
    id: 4,
    airline_code: "indigo",
    airline: "Indigo",
    number: "IND-204",
    from: "MUMBAI",
    to: "DELHI",
    from_code: "HYD",
    to_code: "DEL",
    depart_date: "Thu June 17 2021 15:03:07 GMT+0530 (IST)",
    arrive_date: "Thu June 17 2021 17:03:07 GMT+0530 (IST)",
    price: 6000,
    return_trip: {
      airline: "Indigo",
      number: "IND-205",
      from: "DELHI",
      to: "MUMBAI",
      from_code: "DEL",
      to_code: "HYD",
      depart_date: "Fri June 18 2021 09:03:07 GMT+0530 (IST)",
      arrive_date: "Fri June 18 2021 11:03:07 GMT+0530 (IST)",
      price: 1500,
    },
  },
];

export default FLIGHTS;
