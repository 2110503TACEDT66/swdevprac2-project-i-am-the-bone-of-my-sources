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