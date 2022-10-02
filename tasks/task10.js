// your goal is to create an AsyncLocalStorage
// hint: Each method in the API returns a Promise object

class AsyncLocalStorage {
  /**
   * Sets value for key.
   */
  static setItem(key, value, callback) {}

  /**
   * Fetches key value.
   */
  static getItem(key, callback) {}

  /**
   * Removes a key.
   */
  static removeItem(key, callback) {}

  /**
   * Erases *all* AsyncLocalStorage for the domain.
   */
  static clearStorage(callback) {}

  /**
   * Gets *all* keys known to the app, for all callers, libraries, etc.
   */
  static getKeys(callback) {}

  /**
   * Takes an array of key-value json pairs.
   *   setMultifple([{k1: 'val1'}, {k2: 'val2'}])
   */
  static setMultiple(keyValuePairs, callback) {}

  /**
   * getMultiple resolves to an array of key-value pair objects that matches the
   * input format of getMultiple.
   *
   *   getMultiple(['k1', 'k2']) -> [{k1: 'val1'}, {'k2': 'val2'}]
   */
  static getMultiple(keys, callback) {}

  /**
   * Delete all the keys in the keys array.
   */
  static removeMultiple(keys, callback) {}
}

// ----------------------------------------------------------------
// Examples below

const setItem = async () => {
  try {
    await AsyncLocalStorage.setItem("@me", "Bunlong");
  } catch (e) {
    // read error
  }

  console.log("Set.");
};

const getItem = async () => {
  let item;

  try {
    item = await AsyncLocalStorage.getItem("@me");
  } catch (e) {
    // read error
  }

  console.log(item);
};

const removeItem = async () => {
  try {
    await AsyncLocalStorage.removeItem("@me");
  } catch (e) {
    // remove error
  }

  console.log("Remove.");
};

const clearStorage = async () => {
  try {
    await AsyncLocalStorage.clearStorage();
  } catch (e) {
    // remove error
  }

  console.log("Remove.");
};

const getKeys = async () => {
  let keys = [];

  try {
    keys = await AsyncLocalStorage.getKeys();
  } catch (e) {
    // read key error
  }

  console.log(keys);
};

const setMultiple = async () => {
  const value1 = { key1: "hello1" };
  const value2 = { key2: "hello2" };

  try {
    await AsyncLocalStorage.setMultiple([value1, value2]);
  } catch (e) {
    //save error
  }

  console.log("Done.");
};

const getMultiple = async () => {
  let values;

  try {
    values = await AsyncLocalStorage.getMultiple(["key1", "key2"]);
  } catch (e) {
    // read error
  }

  console.log(values);
};

const removeMultiple = async () => {
  const keys = ["key1", "key2"];

  try {
    await AsyncLocalStorage.removeMultiple(keys);
  } catch (e) {
    // remove error
  }

  console.log("Done");
};
