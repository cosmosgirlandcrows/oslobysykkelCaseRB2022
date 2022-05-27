import React, { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch'
import BikeTable from './BikeTable'

function ListContainer() {

    const APIStationInfo = 'https://gbfs.urbansharing.com/oslobysykkel.no/station_information.json'

    const APIStationStatus = 'https://gbfs.urbansharing.com/oslobysykkel.no/station_status.json'

    
    //This is where we store the API data
    let [stationInfoData, setInfoData] = useState([])
    let [stationStatusData, setStatusData] = useState([])

    const fetchInfo = useFetch(APIStationInfo)
    const fetchData = useFetch(APIStationStatus)
  

    //UseEffect lets us load the API when the app is first loaded, avoiding errors related to code executing before the API as loaded
    useEffect(() => {
        
        setInfoData(fetchInfo)
        setStatusData(fetchData)


    })
 



//Interesting note about this section: because the two database-sources have the same length we can 
// use the positional variable of the .map function to extract the data that correspond with the selected
// stedsnavn. How convenient!
return(
    <div>
        
        {/** Due to the way we handle data we need to make sure nothing is called on before its loaded.
         * without StationStatusData.length > 0 && this code breaks on reload as useEffect doesnt fast enough, I believe, leaving stationStatusData empty
         * as it needs useEffect to fire off before anything can happen. It's hacky but it works.
        */}
        {stationStatusData.length > 0 && stationInfoData.map((item, i)=>{
            return <BikeTable name={item.name} num_bikes_available={stationStatusData[i].num_bikes_available} num_docks_available={stationStatusData[i].num_docks_available}></BikeTable>
        })}
            
    </div>

)

}



export default ListContainer