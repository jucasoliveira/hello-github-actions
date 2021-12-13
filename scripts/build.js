async function main() {

    console.log('building...');
    await sleep(1000);

    console.log('done');
}

const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};
