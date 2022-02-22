const commonLink = "https://gp-js-test.herokuapp.com/pizza/"

  export const getDataGuests = async() => {
    const response = await fetch(`${commonLink}guests`)
    const data = await response.json()
    return data.party
  }

  export const getDataDiet = async(queryStr) => {
    const response = await fetch(`${commonLink}world-diets-book/${queryStr}`)
    const data = await response.json()
    return data.diet
  }

  //query string = state.party.map(guest => guest.name).join(",").split(" ").join("%20"))

  export const getCommonStateFunc = (arr, arr1) => {
    let arr2 = []
    for (let i = 0; i < arr.length; i++) {
      arr2.push({
        name: arr[i].name,
        eatsPizza: arr[i].eatsPizza,
        isVegan: arr1[i].isVegan,
      })
    }
    return arr2
  }