const PostsAPI = {
    posts: [
      { id: 1, title:"1.6", vehicle: {make:"Mercedes-Benz", model:"A-class", year:"2002"}, price:"4000", equipment:"ABS, Airbags", power:"100", location:"Europe", tag:"", fuel_type:"Petrol", gearing_type:"Automatic", transmission:"FWD", doors_number:"4", body_type:"Hatchback", fuel_consumption:"",  mileage:"200000", photos:[] },
      { id: 2, title:"2.0", vehicle: {make:"BMW", model:"3-series", year:"1999"}, price:"2000", equipment:"ABS", power:"100", location:"Europe", tag:"", fuel_type:"Petrol", gearing_type:"Manual", transmission:"RWD", doors_number:"2", body_type:"Sedan", fuel_consumption:"", mileage:"200000", photos:[] },
      { id: 3, title:"1.8", vehicle: {make:"Audi", model:"A4", year:"2003"}, price:"2500", equipment:"A/C, ABS", power:"100", location:"Europe", tag:"", fuel_type:"Diesel", gearing_type:"Manual", transmission:"FWD", doors_number:"4", body_type:"Sedan", fuel_consumption:"", mileage:"200000", photos:[] },
      { id: 4, title:"1.6", vehicle: {make:"Volkswagen", model:"Golf", year:"2005"}, price:"3000", equipment:"A/C, ABS", power:"100", location:"Europe", tag:"", fuel_type:"Petrol", gearing_type:"Manual", transmission:"FWD", doors_number:"2", body_type:"Hatchback", fuel_consumption:"", mileage:"200000", photos:[] },
      { id: 5, title:"1.4", vehicle: {make:"Seat", model:"Ibiza", year:"2000"}, price:"1500", equipment:"ABS", power:"100", location:"Europe", tag:"", fuel_type:"Diesel", gearing_type:"Manual", transmission:"FWD", doors_number:"2", body_type:"Hatchback", fuel_consumption:"", mileage:"200000", photos:[] },
      { id: 6, title:"1.9", vehicle: {make:"Renault", model:"Megane", year:"2004"}, price:"3000", equipment:"A/C", power:"100", location:"Europe", tag:"", fuel_type:"Diesel", gearing_type:"Manual", transmission:"FWD", doors_number:"4", body_type:"Hatchback", fuel_consumption:"", mileage:"200000", photos:[] }
    ],
    all: function() { return this.posts },
    get: function(id) {
      const isPost = a => a.id === id
      return this.posts.find(isPost)
    }
  }
  
  export default PostsAPI;