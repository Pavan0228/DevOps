import client from "./client.js";

async function init() {
    const res48 = await client.lpush("bikes:repairs", [
        "bike:1",
        "bike:2",
        "bike:3",
        "bike:4",
        "bike:5",
    ]);
    console.log("lpush res48", res48); // 5

    const res1 = await client.lpush("bikes:repairs", "bike:1");
    console.log("lpush res1", res1); // 6

    const res2 = await client.lpush("bikes:repairs", "bike:2");
    console.log("lpush res2", res2); // 7

    const res49 = await client.ltrim("bikes:repairs", 0, 2);
    console.log("ltrim res49", res49); // OK

    const res9 = await client.llen("bikes:repairs");
    console.log("llen res9", res9); // 3

    const range = await client.lrange("bikes:repairs", 0, -1);
    console.log("lrange range", range); // [ 'bike:2', 'bike:1', 'bike:3' ]

    const res3 = await client.rpop("bikes:repairs");
    console.log("rpop res3", res3); // 'bike:3'

    const res4 = await client.rpop("bikes:repairs");
    console.log("rpop res4", res4); // 'bike:1'

    const res = await client.del("bikes:repairs");
    console.log("del res", res); // 1

    const res32 = await client.brpop("bikes:repairs", 10);
    console.log("brpop res32", res32); // null if list is empty

    const res33 = await client.lpush("bikes:repairs", 1);
    console.log("lpush res33", res33); // 1
}

init();
