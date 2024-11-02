import client from './client.js';

async function init() {
    await client.set("name:2", "pavan");
    await client.set("name:7", "John", "NX");

    await client.expire("name:7", 10);

    const result = await client.get('name:2');
    console.log(result);
}

init();
