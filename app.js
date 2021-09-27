//  const db = {};
// console.log(db);
// ['manna', 'sani', 'sakib', 'manna', 'sakib', 'rubel', 'manna']
// { manna: 2, sani: 1, sakib: 3, bapparaj:1};

const addToDb = item => {
    const db = getDb();
    if (item in db) {
        db[item] = db[item] + 1;
    }
    else {
        db[item] = 1;
    }
    saveToDb(db);
}

const removeFromDb = item => {
    const db = getDb();
    delete db[item];
    saveToDb(db)
}


const saveToDb = db => {
    localStorage.setItem('shopping-cart', JSON.stringify(db));
}
const getDb = () => {
    let savedDb = localStorage.getItem('shopping-cart');
    savedDb = JSON.parse(savedDb);
    return savedDb;
}
