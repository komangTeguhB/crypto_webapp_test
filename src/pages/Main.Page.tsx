import React, { useCallback, useContext, useEffect, useState } from 'react'
import ItemList from '../components/ItemListComponent'
import { TableHeaders } from './../constants/headers'
import api from './../services/api'
import { globalContext } from '../store/GlobalStore'
import { colors } from '../constants/colors'
import styled from 'styled-components'
import Header from '../components/HeadeComponent'

const StyledMainPageLayout = styled.div`
    .error-message {
        padding: 20px;
        color: ${colors.red};
        font-size: 24px
    }
`

function Main () {
  const [coins, setCoins] = useState<any>([])
  const [filteredCoins, setFilteredCoins] = useState<any>([])
  const [errorFetch, setErrorFetch] = useState('')
  const { globalState } = useContext(globalContext)
  const searchKeyword = globalState.searchKeyword

  const fetchCoinMarket = useCallback(() => {
    api.getCoinMarket()
      .then(response => {
        setCoins(response)
      })
      .catch(error => {
        setErrorFetch(error.message)
      })
  }, [])

  useEffect(() => {
    fetchCoinMarket()
  }, [])

  useEffect(() => {
    const coinsTemp = coins.filter((el: any) => el.name.toLowerCase().includes(searchKeyword.toLowerCase())).map((coin: any) => coin)
    setFilteredCoins(coinsTemp)
  }, [searchKeyword])

  return (
        <StyledMainPageLayout>
            {errorFetch !== ''
              ? (
                <>
                  <Header></Header>
                  <p className='error-message'>Error on fetching URL: {errorFetch}</p>
                </>
                )
              : (
              <>
              <Header></Header>
              <ItemList tableHeaders={TableHeaders} hideHeaders={[1]} rowData={filteredCoins.length > 0 ? filteredCoins : coins}></ItemList>
              </>
                )
            }
         </StyledMainPageLayout>
  )
}
export default Main
