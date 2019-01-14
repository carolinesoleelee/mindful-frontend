const fetchedEmotions = (emotions) => {
  return {type: 'FETCHED_EMOTIONS', emotions}
}

const loadingEmotions = () => {
  return {type: "LOADING_EMOTIONS"}
}

const fetchingEmotions = () => {

  return (dispatch) => {
    dispatch(loadingEmotions())
    fetch('http://localhost:3001/emotions')
    .then(res => res.json())
    .then(emotions => {
      dispatch(fetchedEmotions(emotions))
    })
  }
}

const createdTimesheets = (timesheets) => {
    return {type: 'CREATED_TIMESHEETS', timesheets}
}

const creatingTimesheets = (dataObj) => {

  return (dispatch) => {
    fetch(`http://localhost:3001/timesheets`, {
          method:"POST",
          headers: {
            "Content-type":"application/json",
            "Accept":"application/json"
          },
          body: JSON.stringify({...dataObj, emotions: dataObj.chosenEmotion})
        }).then(res => res.json())
        .then(timesheets => {
          dispatch(createdTimesheets(timesheets))
        })
    }
}


const fetchedTimesheets = (allTimesheets) => {
  return {type: 'FETCHED_TIMESHEETS', allTimesheets}
}

const fetchingTimesheets = () => {

  return (dispatch) => {
    fetch('http://localhost:3001/timesheets')
    .then(res => res.json())
    .then(allTimesheets => {
      dispatch(fetchedTimesheets(allTimesheets))
    })
  }
}

export { fetchingEmotions, creatingTimesheets, fetchingTimesheets }

// fetch(`http://localhost:3001/timesheets`, {
//       method:"POST",
//       headers: {
//         "Content-type":"application/json",
//         "Accept":"application/json"
//       },
//       body: JSON.stringify({
// user_id: 1,
// date: '05-5-2018',
// text: 'testing',
// food: 3,
// water: 2,
// hours_of_sleep: 6,
// bowel_movement:1 ,
// friends:0,
// family:1,
// emotions: [3,4,5]
//       })
//     }).then(res => res.json())
//     .then(data => console.log(data))
