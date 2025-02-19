package org.babyfish.jimmer.sql.kt.dto

import org.babyfish.jimmer.kt.new
import org.babyfish.jimmer.sql.kt.common.assertContentEquals
import org.babyfish.jimmer.sql.kt.model.flat.Company
import org.babyfish.jimmer.sql.kt.model.flat.by
import org.babyfish.jimmer.sql.kt.model.flat.dto.CompanyView
import org.junit.Test

class CompanyViewTest {

    @Test
    fun testDtoToEntity() {
        val view = CompanyView(
            companyName = "myCompany",
            streetName = "myStreet",
            cityName = "myCity",
            provinceName = "myProvince",
            countryName = "myCountry"
        )
        assertContentEquals(
            """{
                |--->"id":0,
                |--->"companyName":"myCompany",
                |--->"street":{
                |--->--->"streetName":"myStreet",
                |--->--->"city":{
                |--->--->--->"cityName":"myCity",
                |--->--->--->"province":{
                |--->--->--->--->"provinceName":"myProvince",
                |--->--->--->--->"country":{
                |--->--->--->--->--->"countryName":"myCountry"
                |--->--->--->--->}
                |--->--->--->}
                |--->--->}
                |--->}
                |}""".trimMargin(),
            view.toEntity()
        )
    }

    @Test
    fun testEntityToDto() {
        val company = new(Company::class).by {
            id = 1L
            companyName = "myCompany"
            street().apply {
                streetName = "myStreet"
                city().apply {
                    cityName = "myCity"
                    province().apply {
                        provinceName = "myProvince"
                        country().apply {
                            countryName = "myCountry"
                        }
                    }
                }
            }
        }
        assertContentEquals(
            """CompanyView(
                |--->id=1, 
                |--->companyName=myCompany, 
                |--->streetName=myStreet, 
                |--->cityName=myCity, 
                |--->provinceName=myProvince, 
                |--->countryName=myCountry
                |)""".trimMargin(),
            CompanyView(company)
        )
    }
}