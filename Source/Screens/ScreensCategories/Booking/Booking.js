import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native';
import axios from 'axios';

const Booking = () => {
  const route = useRoute()
  let { packageId } = route.params
  let { SubCategoryId } = route.params
  const [booking, setBooking] = useState([])
  const [Package_Id, setPackage_Id] = useState(packageId)
  const [SubCategory_Id, subSubCategory_Id] = useState(SubCategoryId)
  const [BookingNo, setBookingNo] = useState("")
  const [Booking_Status, setBooking_Status] = useState("pending")

  useEffect(() => {

    console.log(SubCategoryId, "====>>>>>>>", "SubCategoryId")

    console.log(packageId, "==========>", "route")

    axios.get(`http://10.0.2.2:9090/Package/getById/${packageId}`)
      .then(res => {
        const Booking = res.data;
        setBooking([Booking.Packages])
        console.log(Booking.Packages)

      }).catch((error) => {
        console.error(error.message)
      })

  }, [])

  console.log(booking, "=====================>", "booking")
  console.log("Booking Tab")
  return (
    <View>
      <Text>Booking</Text>
    </View>
  )
}

export default Booking

// const styles = StyleSheet.create({})