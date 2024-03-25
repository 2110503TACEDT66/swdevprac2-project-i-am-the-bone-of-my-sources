interface CampgroundItem {
  _id: string,
  name: string,
  address: string,
  picture: string,
  location: string,
  tel: string,
  __v: number,
  id: string,
}

interface CampgroundJson {
  success: boolean,
  count: number,
  pagination: Object,
  data: CampgroundItem[]
}

interface BookingItem {
  _id: string,
  user: string,
  campground: {
    _id: string,
    name: string,
    picture: string,
    tel: string,
    id: string,
  },
  bookDate: Date,
  createdAt: Date,
  __v: number
}

interface BookingItemResponse {
  success: boolean,
  data: BookingItem
}

interface BookingItemsResponse {
  success: boolean,
  count: number,
  data: BookingItem[]
}
