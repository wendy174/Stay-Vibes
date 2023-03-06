import React from "react";
export default function AddHome(){

    return(
    <form>
            <label>Name:<input type="text" name="name" /></label>
            <label>Address:<input type="text" name="name" /></label>
            <label>Price:<input type="integer" /></label>
            <label>Bedrooms:<input type="integer" name="name" /></label>
            <label>Bathrooms:<input type="integer" name="name" /></label>
            <input type="submit" value="Add a home" />
    </form>
    )
}