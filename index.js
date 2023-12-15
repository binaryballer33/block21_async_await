//  api doesn't allow post so I stopped here after the get, can't do a post, put or delete

const COHORT = "2311-fsa-et-web-ft-sf";
const API_URL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/${COHORT}/events`;

const state = {
  events: [],
};

const eventList = document.querySelector("#events");

// const addevents = document.querySelector("#addevents");
// addevents.addEventListener("submit", addeventsEventListener);

// let formIdField = document.getElementById('eventsId')
// let formGuestIdField = document.getElementById('eventsGuestId')
// let formEventIdField = document.getElementById('eventsEventId')
// let formCohortIdField = document.getElementById('eventsCohortId')

/**
 * Ask the API to create a new artist based on form data
 * @param {Event} event
 */
function addeventsEventListener(event) {
  event.preventDefault(); // prevent it from refreshing the page

  postConfig = {
    method: "POST",
    headers: {
     'Content-Type': "application/json",
     'Accept': "application/json",
    },
    body: JSON.stringify({
      //  api doesn't allow post so I stopped here after the get, can't do a post, put or delete
     })
  }

  fetch(API_URL, postConfig).then(response => console.log(response))
}

/**
 * Get eventss and update state with eventss from API
 * This is a GET REQUEST TO THE SERVER
 */
async function getEvents() {
  try {
    const response = await fetch(API_URL);
    const events = await response.json();
    state.events = events.data;
  } catch (rror) {
    console.error(error);
  }
}


/**
 * Render events from state
 */
const renderEvents = async () => {
  if (!state.events.length) {
    eventList.innerHTML = "<li>No events.</li>";
    return;
  }

  eventList.innerHTML = state.events.map((event) => {
    return `
        <div style="margin: auto;">
          <div style="max-width: 300px; background: aliceblue; border: 1px solid black; margin: 16px; padding: 8px;">
            <p>Events Cohort ID: ${event.cohortId}</p>
            <p>Events Date: ${event.date}</p>
            <p>Events Description ID: </br>${event.description}</p>
            <p>Events ID: ${event.id}</p>
            <p>Events Location: ${event.location}</p>
            <p>Events Name: ${event.name} </p>
            </br>
          </div>
        <div>
    `
  }).join("")
}

/**
 * Sync state with the API and rerender
 */
async function render() {
  await getEvents();
  renderEvents();
}

render();


