export const getDefaultOptions = {
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    Accept: 'application/json'
  },
  method: 'GET'
}
export const baseUrl = process.env.REACT_APP_API_BASE_URL

const api = {
  getCoinMarket: async (
    currency: string = 'idr',
    orderBy: string = 'market_cap_desc',
    sparkline: boolean = false,
    priceChangePerc: string = '7d,30d,1y',
    perPage: number = 10,
    page: number = 1
  ) =>
    await fetch(
        `${baseUrl}/coins/markets?vs_currency=${currency}&order=${orderBy}&per_page=${perPage}&page=${page}&sparkline=${sparkline}&price_change_percentage=${priceChangePerc}`,
        getDefaultOptions
    ).then((response: any) => {
      if (response.ok) {
        return response.json()
      }
      throw new Error(`${response.status} ${response.statusText}`)
    })
}

export default api
