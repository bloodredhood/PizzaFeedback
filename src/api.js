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

  //query string = state.members.map(guest => guest.name).join(",").split(" ").join("%20"))