import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { colors } from '../constants/colors'
import IconButton from './IconButtonComponent'
import { filters } from '../constants/dummyFilters'
import { globalContext } from '../store/GlobalStore'
import { ReducerActions } from '../constants/reducerActions'

const StyledHeaderLayout = styled.div`
    .header-container{
        display: flex;
        align-items: flex-start;
        background-color: ${colors.white};
        padding-left: 10px;
        padding-right: 10px;
        font-size: 24px;
        font-weight: Bold;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .title-container {
        flex: 1 0 50%;

        .title-style {
          padding-left: 20px
        }
    }

    .search-container {
        display: flex;
        flex: 50%;
        justify-content: flex-end;
    }

    .input-style {
        padding: 15px;
        width: 50%;
        margin: 18px;
        margin-right: 8px;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        border-radius: 6px;
        border: 1px solid ${colors.lightGrey};
        background-color: ${colors.lightGrey};
    }   
    .filters-container {
        display: flex;
        justify-content: flex-start;
        padding-top: 24px;
        flex-wrap: wrap;
    }
`

function Header () {
  const [searchText, setSearchText] = useState('')
  const [activeFilterIndex, setActiveFilterIndex] = useState(0)
  const { dispatch } = useContext(globalContext)

  function handleOnKeypress (e: React.KeyboardEvent<any>) {
    if (e.key === 'Enter') {
      dispatch({ type: ReducerActions.SET_KEYWORD, value: searchText })
    }
  }

  function handleOnClick (index: number) {
    setActiveFilterIndex(index)
  }

  return (
        <StyledHeaderLayout>
            <div className="header-container">
                <div className="title-container">
                    <p className='title-style'>Harga Crypto dalam Rupiah Hari Ini</p>
                </div>
                <div className="search-container">
                    <input className="input-style" onKeyDown={(e) => handleOnKeypress(e)} onChange={(e) => setSearchText(e.target.value)} placeholder="Cari aset di Pintu..." />
                </div>
                <div className="filters-container">
                     {filters.map((dummy: any, index: number) => {
                       if (index === activeFilterIndex) {
                         return <IconButton label={dummy.label} icon={dummy.icon} className={'active'} onClick={() => handleOnClick(index)} key={index} />
                       } else {
                         return <IconButton label={dummy.label} icon={dummy.icon} onClick={() => handleOnClick(index)} key={index}/>
                       }
                     }
                     )}
                </div>
            </div>
        </StyledHeaderLayout>
  )
}

export default Header
