async function getShops() {
    const data = fetch('http://localhost:8080/shops_list')
        .then(res => res.json());
    return data;
}


async function getShopsPrices() {
    const data = fetch('http://localhost:8080/shops_prices')
        .then(res => res.json());
    return data;
}

export default {
    getShops: getShops,
    getShopsPrices: getShopsPrices,
};



