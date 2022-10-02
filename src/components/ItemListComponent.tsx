import React from 'react'
import styled, { Interpolation } from 'styled-components'
import { colors } from '../constants/colors'

export interface ItemListProps extends React.TableHTMLAttributes<HTMLDivElement> {
  rowData: any[]
  tableHeaders: string[]
  hideHeaders?: number[]
  customStyles?: Interpolation<React.CSSProperties>
}

const StyledIconButtonLayout = styled.div<ItemListProps>`
    padding-bottom: 10px;
    display: flex;
    flex: wrap;
    padding: 15px;

    .table-scroll {
      flex: 1;
      height:78vh;
      overflow:auto;  
    }

    .table-style {
        flex: 1;
        padding: 10px;
        border-collapse: collapse;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        background-color: ${colors.white};
        ${({ customStyles }) => customStyles}
    }

    .rowHeader-style {
        border: 1px solid ${colors.lightGrey};
        padding: 10px;

        th:nth-child(3) {
            text-align: right;
        }
    }

    .rowContent-style {
        flex: wrap;
        border: 1px solid ${colors.lightGrey};
        padding: 10px;
        flex-direction: row;

        td {
            font-size: 20px;
            text-align: center;
        }
        
        td:nth-child(1) {
            width: 5%;
        }

        td:nth-child(2) {
            width: 12%;
            text-align: left;
        }

        td:nth-child(3) {
            width: 20%;
            text-align: center;
        }

        td:nth-child(4) {
            width: 10%;
            text-align: right;
        }
    }

    th, td {
        padding: 15px;
      }
    
    .header-style {
        font-size: 22px;
        color: ${colors.greyText};
    }

    .custom-icon-button:hover {
        background-color: ${colors.lightGrey};
    }
    .custom-icon-button.active {
        background-color: ${colors.lightGrey};
    }

    .icon {
        margin-left: 0px;
        width: 20px;
        height: 20px;
    }

    .label {
        padding-left: 10px;
        height: 50px;
        vertical-align: super;
        font-weight: bold;
    }

    .bearish {
        color: ${colors.red}
    }

    .bullish {
        color: ${colors.green}
    }
`

const ItemList = React.forwardRef<HTMLDivElement, ItemListProps>((props, ref) => {
  const { hideHeaders, customStyles, rowData, tableHeaders, className, ...rest } = props
  const resolvedClassName = [
    'table-style',
    className
  ].join(' ').trimEnd()

  return (
    <StyledIconButtonLayout tableHeaders={tableHeaders} rowData={rowData} hideHeaders={hideHeaders} customStyles={customStyles} ref={ref} {...rest}>
        <div className="table-scroll">
          <table className={resolvedClassName}>
              <thead>
                  <tr className="rowHeader-style">
                      {tableHeaders.map((tableHeaders, index) => {
                        if (hideHeaders && hideHeaders.length > 0) {
                          const hiddenIndex = hideHeaders.findIndex(e => e === index)
                          const renderMethod = hiddenIndex < 0
                            ? <th className="header-style" colSpan={index === 0 ? 2 : 0}>{tableHeaders}</th>
                            : <th className="header-style" colSpan={index === 0 ? 2 : 0}></th>
                          return renderMethod
                        } else {
                          return <th className="header-style" colSpan={index === 0 ? 2 : 0} key={index}>{tableHeaders}</th>
                        }
                      })}
                  </tr>
              </thead>
              <tbody>
                  {rowData.map((data, index) => (
                      <tr className="rowContent-style" key={index}>
                          <td><img src={data.image} alt={data.name} width={40} height={40}></img></td>
                          <td>{data.name}</td>
                          <td>{data.symbol.toUpperCase()}</td>
                          <td>{Intl.NumberFormat('id-ID', {
                            style: 'currency',
                            currency: 'IDR'
                          }).format(data.current_price)}</td>
                          <td><b className={data.price_change_percentage_24h > 0 ? 'bullish' : 'bearish'}>{data.price_change_percentage_24h.toFixed(2)}%</b></td>
                          <td><b className={data.price_change_percentage_7d_in_currency > 0 ? 'bullish' : 'bearish'}>{data.price_change_percentage_7d_in_currency.toFixed(2)}%</b></td>
                          <td><b className={data.price_change_percentage_30d_in_currency > 0 ? 'bullish' : 'bearish'}>{data.price_change_percentage_30d_in_currency.toFixed(2)}%</b></td>
                          <td><b className={data.price_change_percentage_1y_in_currency > 0 ? 'bullish' : 'bearish'}>{data.price_change_percentage_1y_in_currency.toFixed(2)}%</b></td>
                      </tr>
                  ))}

              </tbody>
          </table>
        </div>
     </StyledIconButtonLayout>
  )
})

export default ItemList

ItemList.defaultProps = {
  tableHeaders: ['Crypto', 'Harga', '24 JAM', '1 MGG', '1 BLN', '1 THN'],
  rowData: [{
    asset: 'Bitcoin',
    asset2: 'BTC'
  }]
}
