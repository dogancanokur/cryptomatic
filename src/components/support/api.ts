import axios from 'axios';

export async function getBinancePriceData(symbol: any, interval: any, limit: any) {
    const url = `https://api.binance.com/api/v1/klines?symbol=${symbol}&interval=${interval}&limit=${limit}`;
    const response = await axios.get(url);
    const data = response.data;
    return data.map((item: any) => parseFloat(item[4])); // Kapanış fiyatlarını alıyoruz
}

export function findSupportResistanceLevels(priceSeries: number[], window: number) {
    const strongSupport: number[] = [];
    const weakSupport: number[] = [];
    const strongResistance: number[] = [];
    const weakResistance: number[] = [];

    for (let i = 0; i < priceSeries.length; i++) {
        if (i >= 10) {
            const windowPrices = priceSeries.slice(i - window, i);
            const minPrice = Math.min(...windowPrices);
            const maxPrice = Math.max(...windowPrices);
            const currentPrice = priceSeries[i];

            if (currentPrice <= minPrice) {
                if (windowPrices.filter(price => price === minPrice).length >= window / 2) {
                    strongSupport.push(minPrice);
                } else {
                    weakSupport.push(minPrice);
                }
            } else if (currentPrice >= maxPrice) {
                if (windowPrices.filter(price => price === maxPrice).length >= window / 2) {
                    strongResistance.push(maxPrice);
                } else {
                    weakResistance.push(maxPrice);
                }
            }
        }
    }

    return {strongSupport, weakSupport, strongResistance, weakResistance};
}
