import client from "./client.js";

async function init() {
    const res1 = await client.hset("bike:1", {
        model: "Deimos",
        brand: "Ergonom",
        type: "Enduro bikes",
        price: 4972,
    });
    console.log(res1); // 4

    const res2 = await client.hget("bike:1", "model");
    console.log(res2); // 'Deimos'

    const res3 = await client.hget("bike:1", "price");
    console.log(res3); // '4972'

    const res4 = await client.hgetall("bike:1");
    console.log(res4);
    /*
    {
        brand: 'Ergonom',
        model: 'Deimos',
        price: '4972',
        type: 'Enduro bikes'
    }
    */

    const res5 = await client.hmget("bike:1", ["model", "price"]);
    console.log(res5); // ['Deimos', '4972']

    const res6 = await client.hincrby("bike:1", "price", 100);
    console.log(res6); // 5072
    const res7 = await client.hincrby("bike:1", "price", -100);
    console.log(res7); // 4972

    const res11 = await client.hincrby("bike:1:stats", "rides", 1);
    console.log(res11); // 1
    const res12 = await client.hincrby("bike:1:stats", "rides", 1);
    console.log(res12); // 2
    const res13 = await client.hincrby("bike:1:stats", "rides", 1);
    console.log(res13); // 3
    const res14 = await client.hincrby("bike:1:stats", "crashes", 1);
    console.log(res14); // 1
    const res15 = await client.hincrby("bike:1:stats", "owners", 1);
    console.log(res15); // 1
    const res16 = await client.hget("bike:1:stats", "rides");
    console.log(res16); // 3
    const res17 = await client.hmget("bike:1:stats", ["crashes", "owners"]);
    console.log(res17); // ['1', '1']
}

init();
